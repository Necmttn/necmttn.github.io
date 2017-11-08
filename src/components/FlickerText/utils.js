/**
 * @see https://github.com/jstejada/react-typist/blob/master/src/utils.js
 */
import React from 'react'

export function extractTextFromElement(element) {
  const stack = element ? [element] : [];
  const lines = [];

  while (stack.length > 0) {
    const current = stack.pop();
    if (React.isValidElement(current)) {
      React.Children.forEach(current.props.children, (child) => {
        stack.push(child);
      });
    } else if (Array.isArray(current)) {
      for (const el of current) {
        stack.push(el);
      }
    } else {
      lines.unshift(current);
    }
  }

  return lines;
}

export function eachPromise(arr, iterator, ...extraArgs) {
  const promiseReducer = (prev, current, idx) => (
    prev.then(() => iterator(current, idx, ...extraArgs))
  );
  return Array.from(arr).reduce(promiseReducer, Promise.resolve());
}

export function exclude(obj, keys) {
  const res = {};
  for (const key in obj) {
    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
  }
  return res;
}

export function cloneElement(element, children) {
  const tag = element.type;
  const props = exclude(element.props, ['children']);
  // eslint-disable-next-line
  props.key = `Typist-element-${tag}-${Date.now() + Math.random() + Math.random()}`;
  return React.createElement(tag, props, ...children);
}

function cloneElementWithSpecifiedTextAtIndex(element, textLines, textIdx) {
  if (textIdx >= textLines.length) {
    return [null, textIdx];
  }

  let idx = textIdx;
  const recurse = (el) => {
    const [child, advIdx] = cloneElementWithSpecifiedTextAtIndex(
      el,
      textLines,
      idx
    );
    idx = advIdx;
    return child;
  };

  const isNonTypistElement = (
    React.isValidElement(element)
  );

  if (isNonTypistElement) {
    const clonedChildren = React.Children.map(element.props.children, recurse) || [];
    return [cloneElement(element, clonedChildren), idx];
  }

  if (Array.isArray(element)) {
    const children = element.map(recurse);
    return [children, idx];
  }

  // Anything that isn't a React element or an Array is interpreted as text
  return [textLines[idx], idx + 1];
}

export function cloneElementWithSpecifiedText({ element, textLines }) {
  if (!element) {
    return undefined;
  }

  return cloneElementWithSpecifiedTextAtIndex(element, textLines, 0)[0];
}