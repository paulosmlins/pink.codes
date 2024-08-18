import AnimateEnter from "@/components/generic/AnimateEnter";
import Separator from "@/components/generic/Separator";
import Contact from "@/components/ui/Contact";
import Tooltip from "@/components/ui/Tooltip";
import useTime from "@/hooks/useTime";

export default function Footer() {
  const { currentTime, timezoneOffset } = useTime();
  return (
    <div className="w-full flex items-center flex-col">
      <Separator className="w-full" />
      <div className="container flex items-center justify-between px-3 py-10">
        <AnimateEnter delay={0.8}>
          <Contact />
        </AnimateEnter>
        <AnimateEnter delay={1}>
          <Tooltip content={timezoneOffset}>
            <span
              className="inline-block cursor-crosshair font-mono text-xs text-gray-500 dark:text-secondary-dark"
              aria-live="off"
              role="status"
            >
              {currentTime}
            </span>
          </Tooltip>
        </AnimateEnter>
      </div>
    </div>
  );
}
