import { FadeInOut } from "@/components/animation/FadeInOut";
import { GoBack } from "@/components/common/GoBack";
import { RenderIf } from "@/components/common/RenderIf";
import { Text } from "@/components/common/Text";
import { addPropsToChildren } from "@/utils/add-props-to-children";

interface FormPageWrapperProps {
  children: React.ReactNode;
  goBackLink: string;
  heading: string;
  icon?: React.ReactNode;
}

export function FormPageWrapper({
  children,
  goBackLink,
  heading,
  icon,
}: FormPageWrapperProps) {
  return (
    <FadeInOut className="m-8 mx-auto flex w-full max-w-[540px] flex-col items-center justify-center gap-14">
      <GoBack href={goBackLink} className="self-start" />

      <div className="relative flex w-full flex-col gap-10 rounded bg-white p-11 shadow-sm">
        <RenderIf condition={!!icon}>
          <div className="radial-gradient absolute -top-6 flex h-14 w-14 items-center justify-center rounded-full">
            {addPropsToChildren(icon, {
              size: 20,
              className: "text-white",
              strokeWidth: 4,
            })}
          </div>
        </RenderIf>
        <Text size="3xl" className="font-bold text-blue-400">
          {heading}
        </Text>

        <div className="flex w-full flex-col items-center gap-6">
          {children}
        </div>
      </div>
    </FadeInOut>
  );
}
