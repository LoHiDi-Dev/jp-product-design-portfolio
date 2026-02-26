import React from 'react';

interface CaseStudySnapshotProps {
  problem: string;
  users: string;
  constraints: string | string[];
  /** Legacy: single string. When roleTitle/roleScope/roleResponsibilities are provided, those take precedence. */
  role: string;
  outcomes: string[];
  /** Standardized My Role block: title (e.g. "Senior Product Designer / UX Architect") */
  roleTitle?: string;
  /** One sentence describing team context + scope */
  roleScope?: string;
  /** 3 verb-led responsibility bullets */
  roleResponsibilities?: string[];
  /** Optional Artifacts section (e.g. link to Figma). */
  artifacts?: React.ReactNode;
  /** Optional class for section labels (e.g. "text-primary" for blue). */
  labelClassName?: string;
}

export function CaseStudySnapshot({
  problem,
  users,
  constraints,
  role,
  outcomes,
  roleTitle,
  roleScope,
  roleResponsibilities,
  artifacts,
  labelClassName = 'text-muted-foreground',
}: CaseStudySnapshotProps) {
  const isConstraintList = Array.isArray(constraints);
  const useRoleBlock = roleTitle != null && roleScope != null && roleResponsibilities != null && roleResponsibilities.length > 0;

  return (
    <div className="bg-card border border-border rounded-2xl p-8 sticky top-24">
      <h3 className="font-medium mb-6">Project Snapshot</h3>
      
      <div className="space-y-6">
        <div>
          <div className={`text-sm font-medium mb-2 ${labelClassName}`}>Problem</div>
          <p className="text-sm">{problem}</p>
        </div>

        <div>
          <div className={`text-sm font-medium mb-2 ${labelClassName}`}>Users</div>
          <p className="text-sm">{users}</p>
        </div>

        <div>
          <div className={`text-sm font-medium mb-2 ${labelClassName}`}>Constraints</div>
          {isConstraintList ? (
            <ul className="text-sm space-y-2">
              {constraints.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm">{constraints}</p>
          )}
        </div>

        <div>
          <div className={`text-sm font-medium mb-2 ${labelClassName}`}>My Role</div>
          {useRoleBlock ? (
            <div className="text-sm space-y-2">
              <p className="font-medium">{roleTitle}</p>
              <p className="text-muted-foreground">{roleScope}</p>
              <p className={`text-sm font-medium mt-2 ${labelClassName}`}>Responsibilities:</p>
              <ul className="space-y-2">
                {roleResponsibilities!.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm">{role}</p>
          )}
        </div>

        <div>
          <div className={`text-sm font-medium mb-2 ${labelClassName}`}>Outcomes</div>
          <ul className="text-sm space-y-2">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {artifacts != null && (
          <div>
            <div className={`text-sm font-medium mb-2 ${labelClassName}`}>Artifacts</div>
            <div className="text-sm">{artifacts}</div>
          </div>
        )}
      </div>
    </div>
  );
}
