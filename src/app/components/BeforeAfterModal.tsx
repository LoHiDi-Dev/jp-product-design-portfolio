import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { AppModal } from './AppModal';
import { MediaFrame } from './MediaFrame';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface AnnotationPin {
  x: number;
  y: number;
  label: string;
  caption: string;
}

interface BeforeAfterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  beforePlaceholder: string;
  afterPlaceholder: string;
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  annotations?: AnnotationPin[];
  caseStudyHref?: string;
  aspectClassName?: string;
  imgClassName?: string;
  beforeImgProps?: Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'className'
  >;
  afterImgProps?: Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'className'
  >;
}

export function BeforeAfterModal({
  open,
  onOpenChange,
  title,
  beforePlaceholder,
  afterPlaceholder,
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before state',
  afterAlt = 'After state',
  annotations = [],
  caseStudyHref,
  aspectClassName = 'aspect-video',
  imgClassName = 'w-full h-full object-cover',
  beforeImgProps,
  afterImgProps,
}: BeforeAfterModalProps) {
  const [view, setView] = useState<'sideBySide' | 'slider'>('sideBySide');
  const [sliderPosition, setSliderPosition] = useState([50]);
  const [showAnnotations, setShowAnnotations] = useState(true);

  const renderBefore = () =>
    beforeSrc ? (
      <ImageWithFallback
        src={beforeSrc}
        alt={beforeAlt}
        className={imgClassName}
        {...beforeImgProps}
      />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        {beforePlaceholder}
      </div>
    );

  const renderAfter = () =>
    afterSrc ? (
      <ImageWithFallback
        src={afterSrc}
        alt={afterAlt}
        className={imgClassName}
        {...afterImgProps}
      />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        {afterPlaceholder}
      </div>
    );

  return (
    <AppModal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      size="xl"
      headerActions={
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={view === 'sideBySide' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setView('sideBySide')}
            className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Side by Side
          </Button>
          <Button
            variant={view === 'slider' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setView('slider')}
            className="hidden md:flex focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Drag to Compare
          </Button>
          {annotations.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAnnotations(!showAnnotations)}
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {showAnnotations ? 'Hide' : 'Show'} Annotations
            </Button>
          )}
        </div>
      }
      bodyClassName="p-6"
      footer={
        caseStudyHref ? (
          <div className="flex justify-center">
            <Link to={caseStudyHref}>
              <Button size="lg" className="gap-2">
                Read Full Case Study <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Link>
          </div>
        ) : undefined
      }
    >
      {view === 'sideBySide' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-medium mb-3 text-muted-foreground">
              Before
            </div>
            <div className={`relative ${aspectClassName} rounded-lg overflow-hidden`}>
              <MediaFrame
                src={beforeSrc}
                alt={beforeAlt}
                placeholder={beforePlaceholder}
                className="absolute inset-0 rounded-lg"
                imgClassName={imgClassName}
                imgProps={beforeImgProps}
              />
              {showAnnotations &&
                annotations.map((pin, i) => (
                  <button
                    key={i}
                    type="button"
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    title={`${pin.label}: ${pin.caption}`}
                    aria-label={`${pin.label}. ${pin.caption}`}
                  >
                    <div className="w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs font-medium shadow-lg ring-2 ring-background">
                      {i + 1}
                    </div>
                  </button>
                ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-3 text-muted-foreground">
              After
            </div>
            <div className={`relative ${aspectClassName} rounded-lg overflow-hidden`}>
              <MediaFrame
                src={afterSrc}
                alt={afterAlt}
                placeholder={afterPlaceholder}
                className="absolute inset-0 rounded-lg"
                imgClassName={imgClassName}
                imgProps={afterImgProps}
              />
              {showAnnotations &&
                annotations.map((pin, i) => (
                  <button
                    key={i}
                    type="button"
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    title={`${pin.label}: ${pin.caption}`}
                    aria-label={`${pin.label}. ${pin.caption}`}
                  >
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shadow-lg ring-2 ring-background">
                      {i + 1}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-sm font-medium mb-3 text-muted-foreground">
            Drag slider to compare
          </div>
          <div
            className={`relative ${aspectClassName} bg-muted rounded-lg overflow-hidden border border-border`}
          >
            <div className="absolute inset-0">{renderBefore()}</div>

            <div
              className="absolute inset-0 border-r-2 border-primary"
              style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
            >
              {renderAfter()}
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition[0]}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 border-l-2 border-r-2 border-primary-foreground" />
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition[0]}
              onChange={(e) =>
                setSliderPosition([parseInt(e.target.value, 10)])
              }
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize focus:outline-none"
              aria-label="Compare slider"
            />
          </div>
        </div>
      )}

      {showAnnotations && annotations.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {annotations.map((pin, i) => (
            <div key={i} className="flex gap-3 p-4 bg-muted rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                  {i + 1}
                </div>
              </div>
              <div>
                <div className="font-medium text-sm mb-1">{pin.label}</div>
                <div className="text-sm text-muted-foreground">{pin.caption}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppModal>
  );
}
