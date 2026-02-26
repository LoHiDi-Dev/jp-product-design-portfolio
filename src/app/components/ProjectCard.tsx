import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { Thumbnail } from './Thumbnail';

interface ProjectCardProps {
  title: string;
  role: string;
  timeline: string;
  outcome: string;
  tags: string[];
  href: string;
  /** Public URL or imported asset */
  imageSrc?: string;
  imageAlt?: string;
  /** Shown when imageSrc is missing */
  imagePlaceholder?: string;
  isPersonal?: boolean;
  /** When set, shown instead of default "Personal" badge (e.g. "Personal • Concept Study"). */
  badge?: string;
  onBeforeAfterClick?: () => void;
  onProofClick?: () => void;
}

export function ProjectCard({ 
  title, 
  role, 
  timeline, 
  outcome, 
  tags, 
  href,
  imageSrc,
  imageAlt = '',
  imagePlaceholder = 'Project thumbnail placeholder',
  isPersonal = false,
  badge,
  onBeforeAfterClick,
  onProofClick,
}: ProjectCardProps) {
  const badgeLabel = badge ?? (isPersonal ? 'Personal' : null);
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image - canonical sm (16:9) */}
      <Thumbnail
        src={imageSrc}
        alt={imageAlt}
        placeholder={imagePlaceholder}
        size="sm"
        fit="cover"
        className="rounded-t-2xl rounded-b-none border-0 border-b border-border shadow-none"
      />

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          {badgeLabel && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded shrink-0">
              {badgeLabel}
            </span>
          )}
        </div>
        
        {/* Role/Scope line */}
        <div className="text-sm text-muted-foreground mb-3">
          {role ? <div className="whitespace-nowrap overflow-hidden text-ellipsis" title={role}>{role}</div> : null}
          <div>{timeline}</div>
        </div>

        {/* Outcome line - min-height keeps card grid balanced across items */}
        <p className="text-sm mb-4 font-medium min-h-[2.75rem]">{outcome}</p>

        {/* Tags - taxonomy chips (Role, Domain, Platform, 2-4 Methods) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          <Link to={href}>
            <Button
              variant="outline"
              size="sm"
              className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View Case Study
            </Button>
          </Link>
          {onBeforeAfterClick && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={onBeforeAfterClick}
              className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Before/After
            </Button>
          )}
          {onProofClick && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={onProofClick}
              className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Proof
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}