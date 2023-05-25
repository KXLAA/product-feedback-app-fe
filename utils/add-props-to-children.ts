import React from "react";

function addPropsToReactElement<T extends object>(
  element: React.ReactNode,
  props: T
) {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }
  return element;
}

function addPropsToChildren<T extends object>(
  children: React.ReactNode,
  props: T
) {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, props);
  }
  return children.map((childElement) =>
    addPropsToReactElement(childElement, { ...props, key: React.useId() })
  );
}

export { addPropsToChildren, addPropsToReactElement };
