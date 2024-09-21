import React, {
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";

type Content = ReactNode | null;
type Breakpoint = number;
type SetItem = [Content, Breakpoint?];

interface ResponsiveContentProps {
  set: SetItem[];
  display?: "block" | "flex" | "grid" | "inline" | "inline-block";
}

const generateStyles = (
  set: SetItem[],
  styleId: string,
  display: string
): string => {
  const mediaQueries: string[] = [];
  let defaultStyles = "";

  for (let i = 0; i < set.length; i++) {
    const [_, breakpoint] = set[i];
    const className = `${styleId}-${i}`;
    defaultStyles += `.${className} { display: none !important; }`;

    if (i === 0) {
      if (breakpoint !== undefined) {
        mediaQueries.push(
          `@media (max-width: ${
            breakpoint - 1
          }px) { .${className} { display: ${display} !important; } }`
        );
      } else {
        mediaQueries.push(`.${className} { display: ${display} !important; }`);
      }
    } else {
      const prevBreakpoint = set[i - 1][1];
      if (prevBreakpoint !== undefined) {
        if (breakpoint !== undefined) {
          mediaQueries.push(
            `@media (min-width: ${prevBreakpoint}px) and (max-width: ${
              breakpoint - 1
            }px) { .${className} { display: ${display} !important; } }`
          );
        } else {
          mediaQueries.push(
            `@media (min-width: ${prevBreakpoint}px) { .${className} { display: ${display} !important; } }`
          );
        }
      }
    }
  }

  return defaultStyles + mediaQueries.join("\n");
};

const ResponsiveContent = ({
  set,
  display = "block",
}: ResponsiveContentProps) => {
  const styleId = `responsive-content-${Math.random()
    .toString(36)
    .substring(2, 9)}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: generateStyles(set, styleId, display),
        }}
      />
      {
        <>
          {set.map(([content], index) => {
            if (content === null) return null;

            const className = `${styleId}-${index}`;
            const elementProps = { className };

            if (isValidElement(content)) {
              const elementWithClassName = content as ReactElement<{
                className?: string;
              }>;
              if ("className" in elementWithClassName.props) {
                return cloneElement(elementWithClassName, {
                  ...elementProps,
                  className: `${
                    elementWithClassName.props.className || ""
                  } ${className}`.trim(),
                });
              }
            }

            return (
              <div key={index} {...elementProps}>
                {content}
              </div>
            );
          })}
        </>
      }
    </>
  );
};

export default ResponsiveContent;
