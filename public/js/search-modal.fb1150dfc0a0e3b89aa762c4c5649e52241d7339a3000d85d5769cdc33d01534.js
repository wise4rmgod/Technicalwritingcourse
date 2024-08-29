(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn2) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn2);
      }
      return fn2.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn2) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn2);
          }
          return fn2.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn3) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn3.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn2.delegationSelector = isDelegated ? handler : null;
    fn2.callable = callable;
    fn2.oneOff = oneOff;
    fn2.uidEvent = uid;
    handlers[uid] = fn2;
    element.addEventListener(typeEvent, fn2, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn2) {
      return;
    }
    element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
    delete events[typeEvent][fn2.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), typeof jsonConfig === "object" ? jsonConfig : {}), isElement2(element) ? Manipulator.getDataAttributes(element) : {}), typeof config === "object" ? config : {});
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.2";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? parseSelector(hrefAttribute.trim()) : null;
    }
    return selector;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = __spreadValues(__spreadValues({}, this._config.content), content);
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory(__spreadProps(__spreadValues({}, this._config), {
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }));
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = __spreadValues(__spreadValues({}, dataAttributes), typeof config === "object" && config ? config : {});
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = __spreadProps(__spreadValues({}, Tooltip.Default), {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  });
  var DefaultType$2 = __spreadProps(__spreadValues({}, Tooltip.DefaultType), {
    content: "(null|string|element|function)"
  });
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);

  // <stdin>
  (() => {
    "use strict";
    const searchToggleMobile = document.getElementById("searchToggleMobile");
    const searchToggleDesktop = document.getElementById("searchToggleDesktop");
    const searchModal = document.getElementById("searchModal");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("query");
    const searchResults = document.getElementById("searchResults");
    const flexSearchModal = new Modal(searchModal, {
      focus: true
    });
    searchToggleMobile.addEventListener("click", showModalOnClick);
    searchToggleDesktop.addEventListener("click", showModalOnClick);
    function showModalOnClick() {
      flexSearchModal.toggle();
      document.querySelector(".search-no-recent").classList.remove("d-none");
    }
    document.addEventListener("keydown", onKeyDownHandler);
    function onKeyDownHandler(event) {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        flexSearchModal.show();
        searchForm.reset();
        searchResults.textContent = "";
        document.querySelector(".search-no-recent").classList.remove("d-none");
      }
      if (event.key === "Escape") {
        searchForm.reset();
        searchResults.textContent = "";
        if (searchResultSelected) {
          removeClass(searchResultSelected, "selected");
          index = -1;
        }
        document.querySelector(".search-no-results").classList.add("d-none");
      }
    }
    document.addEventListener("click", function(event) {
      var modalElement = searchModal.contains(event.target);
      if (!modalElement) {
        searchForm.reset();
        searchResults.textContent = "";
        document.querySelector(".search-no-results").classList.add("d-none");
      }
      if (searchResultSelected) {
        removeClass(searchResultSelected, "selected");
        index = -1;
      }
    });
    searchModal.addEventListener("shown.bs.modal", () => {
      searchInput.focus();
    });
    var searchResultSelected;
    var index = -1;
    document.addEventListener("keydown", function(event) {
      var len = searchResults.getElementsByTagName("article").length - 1;
      if (event.key === "ArrowDown") {
        index++;
        if (searchResultSelected) {
          removeClass(searchResultSelected, "selected");
          const next = searchResults.getElementsByTagName("article")[index];
          if (typeof next !== "undefined" && index <= len) {
            searchResultSelected = next;
          } else {
            index = 0;
            searchResultSelected = searchResults.getElementsByTagName("article")[0];
          }
          addClass(searchResultSelected, "selected");
        } else {
          index = 0;
          searchResultSelected = searchResults.getElementsByTagName("article")[0];
          addClass(searchResultSelected, "selected");
        }
      } else if (event.key === "ArrowUp") {
        if (searchResultSelected) {
          removeClass(searchResultSelected, "selected");
          index--;
          const next = searchResults.getElementsByTagName("article")[index];
          if (typeof next !== "undefined" && index >= 0) {
            searchResultSelected = next;
          } else {
            index = len;
            searchResultSelected = searchResults.getElementsByTagName("article")[len];
          }
          addClass(searchResultSelected, "selected");
        } else {
          index = 0;
          searchResultSelected = searchResults.getElementsByTagName("article")[len];
          addClass(searchResultSelected, "selected");
        }
      }
    }, false);
    function removeClass(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
      searchResultSelected.querySelector("a").blur();
    }
    function addClass(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += " " + className;
      }
      searchResultSelected.querySelector("a").focus();
    }
    searchResults.addEventListener("mouseover", () => {
      if (searchResultSelected) {
        removeClass(searchResultSelected, "selected");
      }
    }, false);
  })();
})();
/*!
 * Search modal for Bootstrap based Hyas sites
 * Copyright 2021-2023 Hyas
 * Licensed under the MIT License
 */
/*! Bundled license information:

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.2 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91c2VyQWdlbnQuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCAibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsICJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2RvbS9kYXRhLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2J1dHRvbi5qcyIsICJub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Nhcm91c2VsLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2NvbGxhcHNlLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvb2ZmY2FudmFzLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvdGVtcGxhdGUtZmFjdG9yeS5qcyIsICJub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy90b29sdGlwLmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3BvcG92ZXIuanMiLCAibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwgIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3RhYi5qcyIsICJub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy90b2FzdC5qcyIsICI8c3RkaW4+Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiLi9lbnVtcy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdywgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckJhc2UgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tIFwiLi9wb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IiwgImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwgImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCAiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG4gIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcyAmJiBBcnJheS5pc0FycmF5KHVhRGF0YS5icmFuZHMpKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xufSIsICJpbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xufSIsICJpbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICBzY2FsZVggPSBlbGVtZW50Lm9mZnNldFdpZHRoID4gMCA/IHJvdW5kKGNsaWVudFJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxIDogMTtcbiAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgfVxuXG4gIHZhciBfcmVmID0gaXNFbGVtZW50KGVsZW1lbnQpID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93LFxuICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gIHZhciB4ID0gKGNsaWVudFJlY3QubGVmdCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvIHNjYWxlWDtcbiAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0b3A6IHksXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgbGVmdDogeCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsICJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgfVxuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsICJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHdpdGhpbiB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmLCB3aW4pIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcbiAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgdmFyIF9yZWYzID0gdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0pIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmMy54O1xuICB5ID0gX3JlZjMueTtcbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIHZhciBfcmVmNCA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSwgZ2V0V2luZG93KHBvcHBlcikpIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmNC54O1xuICB5ID0gX3JlZjQueTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsICJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCAidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgaWYgKGxheW91dFZpZXdwb3J0IHx8ICFsYXlvdXRWaWV3cG9ydCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsICJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsICJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsICJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsICJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwgImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMgXHUyMDEzIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwgImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwgImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCAiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB7IHdpdGhpbiwgd2l0aGluTWF4Q2xhbXAgfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBtaW4gYXMgbWF0aE1pbiwgbWF4IGFzIG1hdGhNYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4ID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgcmV0dXJuIHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDE7XG59IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsICJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsICJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlc107XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyIsICJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDFfMDAwXzAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vKipcbiAqIFByb3Blcmx5IGVzY2FwZSBJRHMgc2VsZWN0b3JzIHRvIGhhbmRsZSB3ZWlyZCBJRHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgcGFyc2VTZWxlY3RvciA9IHNlbGVjdG9yID0+IHtcbiAgaWYgKHNlbGVjdG9yICYmIHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5lc2NhcGUpIHtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIG5lZWRzIGVzY2FwaW5nIHRvIGhhbmRsZSBJRHMgKGh0bWw1KykgY29udGFpbmluZyBmb3IgaW5zdGFuY2UgL1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywgKG1hdGNoLCBpZCkgPT4gYCMke0NTUy5lc2NhcGUoaWQpfWApXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmplY3QgPT4ge1xuICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29iamVjdH1gXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBQdWJsaWMgVXRpbCBBUElcbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0WzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gIGlmIChpc0VsZW1lbnQob2JqZWN0KSkge1xuICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJzZVNlbGVjdG9yKG9iamVjdCkpXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFpc0VsZW1lbnQoZWxlbWVudCkgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSdcbiAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpXG5cbiAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbiAgfVxuXG4gIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGVsZW1lbnQuY2xvc2VzdCgnc3VtbWFyeScpXG4gICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5wYXJlbnROb2RlICE9PSBjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbi8qKlxuICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB2b2lkXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gKi9cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50Lm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW11cblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgLy8gYWRkIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBjYWxsIHdoZW4gdGhlIGRvY3VtZW50IGlzIGluIGxvYWRpbmcgc3RhdGVcbiAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnXG5cbmNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRVxuICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXVxuICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW5cbiAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZXhlY3V0ZSA9IChwb3NzaWJsZUNhbGxiYWNrLCBhcmdzID0gW10sIGRlZmF1bHRWYWx1ZSA9IHBvc3NpYmxlQ2FsbGJhY2spID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBwb3NzaWJsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcG9zc2libGVDYWxsYmFjayguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZVxufVxuXG5jb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgY29uc3QgaGFuZGxlciA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcHJldmlvdXMvbmV4dCBlbGVtZW50IG9mIGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudCAgIFRoZSBhY3RpdmUgZWxlbWVudFxuICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gKiBAcmV0dXJuIHtFbGVtZW50fGVsZW19IFRoZSBwcm9wZXIgZWxlbWVudFxuICovXG5jb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG5cbiAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnRcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXVxuICB9XG5cbiAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMVxuXG4gIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgIGluZGV4ID0gKGluZGV4ICsgbGlzdExlbmd0aCkgJSBsaXN0TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV1cbn1cblxuZXhwb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0alF1ZXJ5LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wLFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIHBhcnNlU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHRvVHlwZVxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIFByaXZhdGUgbWV0aG9kc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VFdmVudFVpZChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50IH0pXG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXQgfSlcblxuICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRzKVxuICAgIC5maW5kKGV2ZW50ID0+IGV2ZW50LmNhbGxhYmxlID09PSBjYWxsYWJsZSAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcilcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIC8vIFRPRE86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogKGhhbmRsZXIgfHwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KVxuXG4gIGlmICghbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcblxuICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKVxuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGNhbGxhYmxlKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSlcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLmNhbGxhYmxlID0gY2FsbGFibGVcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBpc0RlbGVnYXRlZClcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBmb3IgKGNvbnN0IFtoYW5kbGVyS2V5LCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnRcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudEV2ZW50IG9mIE9iamVjdC5rZXlzKGV2ZW50cykpIHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXlIYW5kbGVycywgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudClcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcblxuICAgIGxldCBqUXVlcnlFdmVudCA9IG51bGxcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBjb25zdCBldnQgPSBoeWRyYXRlT2JqKG5ldyBFdmVudChldmVudCwgeyBidWJibGVzLCBjYW5jZWxhYmxlOiB0cnVlIH0pLCBhcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlT2JqKG9iaiwgbWV0YSA9IHt9KSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGEpKSB7XG4gICAgdHJ5IHtcbiAgICAgIG9ialtrZXldID0gdmFsdWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBic0tleXMpIHtcbiAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7IGlzRWxlbWVudCwgdG9UeXBlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29uZmlnIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgLi4uKGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIDoge30pLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICB9XG5cbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCBleHBlY3RlZFR5cGVzXSBvZiBPYmplY3QuZW50cmllcyhjb25maWdUeXBlcykpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1xuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBiYXNlLWNvbXBvbmVudC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vdXRpbC9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4zLjInXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0KGdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpXG4gIH1cblxuICBzdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCBjb25maWcgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKGVsZW1lbnQpIHx8IG5ldyB0aGlzKGVsZW1lbnQsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbClcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWBcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gXG4gIH1cblxuICBzdGF0aWMgZXZlbnROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gYCR7bmFtZX0ke3RoaXMuRVZFTlRfS0VZfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBpc0Rpc2FibGVkLCBpc1Zpc2libGUsIHBhcnNlU2VsZWN0b3IgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICghaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJy4nKSkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyaWJ1dGUgPSBgIyR7aHJlZkF0dHJpYnV0ZS5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gcGFyc2VTZWxlY3RvcihocmVmQXR0cmlidXRlLnRyaW0oKSkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpXG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbFxuICB9LFxuXG4gIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0Rpc2FibGVkIH0gZnJvbSAnLi9pbmRleC5qcydcblxuY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWBcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgIGluc3RhbmNlW21ldGhvZF0oKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlclxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKVxuXG4gICAgaWYgKGNsb3NlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRClcbiAgICB0aGlzLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQWxlcnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKEFsZXJ0LCAnY2xvc2UnKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcbiAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbilcblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3N3aXBlJ1xuY29uc3QgRVZFTlRfS0VZID0gJy5icy5zd2lwZSdcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBlbmRDYWxsYmFjazogbnVsbCxcbiAgbGVmdENhbGxiYWNrOiBudWxsLFxuICByaWdodENhbGxiYWNrOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGxlZnRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYXG4gICAgfVxuICB9XG5cbiAgX2VuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjaylcbiAgfVxuXG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgMCA6XG4gICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YVggPSBNYXRoLmFicyh0aGlzLl9kZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYXG5cbiAgICB0aGlzLl9kZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKVxuICB9XG5cbiAgX2luaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmRcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFN3aXBlIGZyb20gJy4vdXRpbC9zd2lwZS5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSBTRUxFQ1RPUl9BQ1RJVkUgKyBTRUxFQ1RPUl9JVEVNXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gIFtBUlJPV19MRUZUX0tFWV06IERJUkVDVElPTl9SSUdIVCxcbiAgW0FSUk9XX1JJR0hUX0tFWV06IERJUkVDVElPTl9MRUZUXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHJpZGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgd3JhcDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJywgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgdG91Y2g6ICdib29sZWFuJyxcbiAgd3JhcDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGxcblxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBuZXh0KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRklYTUUgVE9ETyB1c2UgYGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZWBcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICB9XG5cbiAgY3ljbGUoKSB7XG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gIH1cblxuICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY3ljbGUoKVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKClcbiAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKVxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuZGVmYXVsdEludGVydmFsID0gY29uZmlnLmludGVydmFsXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgKCkgPT4gdGhpcy5wYXVzZSgpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsICgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIFN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgaW1nIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgbGVmdENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9MRUZUKSksXG4gICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgfVxuXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGUodGhpcy5fZWxlbWVudCwgc3dpcGVDb25maWcpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgIGNvbnN0IG5ld0FjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCB0aGlzLl9nZXRBY3RpdmUoKVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbFxuICB9XG5cbiAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKVxuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldEl0ZW1zKCksIGFjdGl2ZUVsZW1lbnQsIGlzTmV4dCwgdGhpcy5fY29uZmlnLndyYXApXG5cbiAgICBpZiAobmV4dEVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIGV2ZW50TmFtZSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgZnJvbTogdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKVxuXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAvLyBUT0RPOiBjaGFuZ2UgdGVzdHMgdGhhdCB1c2UgZW1wdHkgZGl2cyB0byBhdm9pZCB0aGlzIGNoZWNrXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMucGF1c2UoKVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkRcbiAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgIHJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgIHRyaWdnZXJFdmVudChFVkVOVF9TTElEKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpXG4gIH1cblxuICBfZ2V0QWN0aXZlKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1zKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVFxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcbiAgfVxuXG4gIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICBpZiAoc2xpZGVJbmRleCkge1xuICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgIGNhcm91c2VsLm5leHQoKVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNhcm91c2VsLnByZXYoKVxuICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcidcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS4ke0NMQVNTX05BTUVfU0hPV31gXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9DbG9zZTogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIG9mZnNldDogWzAsIDJdLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnRcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpIC8vIFRPRE86IHY2IHJlbW92ZVxuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlLCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50LCByZWZsb3cgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyhlbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcC5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGlzUlRMLCBpc1Zpc2libGUsIHJlZmxvdyB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhci5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ21vZGFsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm1vZGFsLnNob3cnXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgZm9jdXM6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIHRoaXMuX3Njcm9sbEJhci5oaWRlKClcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYod2luZG93LCBFVkVOVF9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlLFxuICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgLy8gdHJ5IHRvIGFwcGVuZCBkeW5hbWljIG1vZGFsXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiAhdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50MiA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9zY3JvbGxCYXIucmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBpbml0aWFsT3ZlcmZsb3dZID0gdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1lcbiAgICAvLyByZXR1cm4gaWYgdGhlIGZvbGxvd2luZyBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gaGFzbid0IHlldCBjb21wbGV0ZWRcbiAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1lcbiAgICAgIH0sIHRoaXMuX2RpYWxvZylcbiAgICB9LCB0aGlzLl9kaWFsb2cpXG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgKi9cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKClcbiAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMFxuXG4gICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIG1vZGFsIHRvZ2dsZXIgd2hpbGUgYW5vdGhlciBvbmUgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgTW9kYWwuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcC5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGlzRGlzYWJsZWQsXG4gIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXIuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURJTkcgPSAnaGlkaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCB8fCB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORylcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKClcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX0hJRElORylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICBjb25zdCBjbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKVxuXG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KClcbiAgfVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKCdbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXScpKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKVxuICAgIH1cbiAgfVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoT2ZmY2FudmFzKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8vIGpzLWRvY3Mtc3RhcnQgYWxsb3ctbGlzdFxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG4vLyBqcy1kb2NzLWVuZCBhbGxvdy1saXN0XG5cbmNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBVUkxzIHRoYXQgYXJlIHNhZmUgd3J0LiBYU1MgaW4gVVJMIG5hdmlnYXRpb25cbiAqIGNvbnRleHRzLlxuICpcbiAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xNS4yLjgvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHMjTDM4XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD8hamF2YXNjcmlwdDopKD86W2EtejAtOSsuLV0rOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvaVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJpYnV0ZXMuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuICAgIC5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pXG5cbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVMaXN0KSB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCwgc2FuaXRpemVIdG1sIH0gZnJvbSAnLi9zYW5pdGl6ZXIuanMnXG5pbXBvcnQgeyBleGVjdXRlLCBnZXRFbGVtZW50LCBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnVGVtcGxhdGVGYWN0b3J5J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGNvbnRlbnQ6IHt9LCAvLyB7IHNlbGVjdG9yIDogdGV4dCAsICBzZWxlY3RvcjIgOiB0ZXh0MiAsIH1cbiAgZXh0cmFDbGFzczogJycsXG4gIGh0bWw6IGZhbHNlLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIGNvbnRlbnQ6ICdvYmplY3QnLFxuICBleHRyYUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICB0ZW1wbGF0ZTogJ3N0cmluZydcbn1cblxuY29uc3QgRGVmYXVsdENvbnRlbnRUeXBlID0ge1xuICBlbnRyeTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbnxudWxsKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpXG4gICAgICAubWFwKGNvbmZpZyA9PiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb25maWcpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICB9XG5cbiAgaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoID4gMFxuICB9XG5cbiAgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbnRlbnQpXG4gICAgdGhpcy5fY29uZmlnLmNvbnRlbnQgPSB7IC4uLnRoaXMuX2NvbmZpZy5jb250ZW50LCAuLi5jb250ZW50IH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdG9IdG1sKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKVxuXG4gICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIHRleHRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSkge1xuICAgICAgdGhpcy5fc2V0Q29udGVudCh0ZW1wbGF0ZVdyYXBwZXIsIHRleHQsIHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVXcmFwcGVyLmNoaWxkcmVuWzBdXG4gICAgY29uc3QgZXh0cmFDbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKVxuXG4gICAgaWYgKGV4dHJhQ2xhc3MpIHtcbiAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzcy5zcGxpdCgnICcpKVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZykge1xuICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb25maWcuY29udGVudClcbiAgfVxuXG4gIF9jaGVja0NvbnRlbnQoYXJnKSB7XG4gICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGFyZykpIHtcbiAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoeyBzZWxlY3RvciwgZW50cnk6IGNvbnRlbnQgfSwgRGVmYXVsdENvbnRlbnRUeXBlKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRDb250ZW50KHRlbXBsYXRlLCBjb250ZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIHRlbXBsYXRlKVxuXG4gICAgaWYgKCF0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRlbnQgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb250ZW50KVxuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQucmVtb3ZlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3B1dEVsZW1lbnRJblRlbXBsYXRlKGdldEVsZW1lbnQoY29udGVudCksIHRlbXBsYXRlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUoY29udGVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgfVxuXG4gIF9tYXliZVNhbml0aXplKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmdcbiAgfVxuXG4gIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzXSlcbiAgfVxuXG4gIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZXhlY3V0ZSwgZmluZFNoYWRvd1Jvb3QsIGdldEVsZW1lbnQsIGdldFVJRCwgaXNSVEwsIG5vb3AgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0IH0gZnJvbSAnLi91dGlsL3Nhbml0aXplci5qcydcbmltcG9ydCBUZW1wbGF0ZUZhY3RvcnkgZnJvbSAnLi91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gXG5cbmNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCdcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gJ2hpZGUnXG5jb25zdCBFVkVOVF9ISURERU4gPSAnaGlkZGVuJ1xuY29uc3QgRVZFTlRfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfU0hPV04gPSAnc2hvd24nXG5jb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCdcbmNvbnN0IEVWRU5UX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgRVZFTlRfRk9DVVNJTiA9ICdmb2N1c2luJ1xuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSAnZm9jdXNvdXQnXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnXG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIGRlbGF5OiAwLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGh0bWw6IGZhbHNlLFxuICBvZmZzZXQ6IFswLCA2XSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdGl0bGU6ICcnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZydcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGxcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrXG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZW50ZXIoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKVxuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XKSlcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogdjYgcmVtb3ZlIHRoaXMgb3IgbWFrZSBpdCBvcHRpb25hbFxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSlcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOKSlcblxuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURFKSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbCAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTikpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIF9nZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgY2hlY2sgaW4gdjZcbiAgICBpZiAoIXRpcCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgICAvLyBUT0RPOiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYClcblxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudFxuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBuZXcgVGVtcGxhdGVGYWN0b3J5KHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeVxuICB9XG5cbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2dldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCAodGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZXhlY3V0ZSh0aGlzLl9jb25maWcucGxhY2VtZW50LCBbdGhpcywgdGlwLCB0aGlzLl9lbGVtZW50XSlcbiAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgICByZXR1cm4gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpcy5fZWxlbWVudF0pXG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZVNldFBsYWNlbWVudCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2JlZm9yZU1haW4nLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFByZS1zZXQgUG9wcGVyJ3MgcGxhY2VtZW50IGF0dHJpYnV0ZSBpbiBvcmRlciB0byByZWFkIHRoZSBhcnJvdyBzaXplcyBwcm9wZXJseS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgUG9wcGVyIG1peGVzIHVwIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGRpbWVuc2lvbnMgc2luY2UgdGhlIGluaXRpYWwgYXJyb3cgc3R5bGUgaXMgZm9yIHRvcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIGRhdGEuc3RhdGUucGxhY2VtZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC50b2dnbGUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4pXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUKVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZVxuICAgICAgICAgIGNvbnRleHQuX2VudGVyKClcbiAgICAgICAgfSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9XG4gICAgICAgICAgICBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKSAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXG4gIH1cblxuICBfZW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKCkge1xuICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dClcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlXG4gICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJ1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcC5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBjb250ZW50OiAnJyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnY2xpY2snXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBPdmVycmlkZXNcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnQsIGlzRGlzYWJsZWQsIGlzVmlzaWJsZSB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfVEFSR0VUX0xJTktTID0gJ1tocmVmXSdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSU5LX0lURU1TID0gYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9OQVZfSVRFTVN9ID4gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YFxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogbnVsbCwgLy8gVE9ETzogdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gIHNtb290aFNjcm9sbDogZmFsc2UsXG4gIHRhcmdldDogbnVsbCxcbiAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICcobnVtYmVyfG51bGwpJywgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnc3RyaW5nJyxcbiAgc21vb3RoU2Nyb2xsOiAnYm9vbGVhbicsXG4gIHRhcmdldDogJ2VsZW1lbnQnLFxuICB0aHJlc2hvbGQ6ICdhcnJheSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIHRoaXMuX2VsZW1lbnQgaXMgdGhlIG9ic2VydmFibGVzQ29udGFpbmVyIGFuZCBjb25maWcudGFyZ2V0IHRoZSBtZW51IGxpbmtzIHdyYXBwZXJcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyA/IG51bGwgOiB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YSA9IHtcbiAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgIHBhcmVudFNjcm9sbFRvcDogMFxuICAgIH1cbiAgICB0aGlzLnJlZnJlc2goKSAvLyBpbml0aWFsaXplXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpXG4gICAgdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKVxuXG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSB0aGlzLl9nZXROZXdPYnNlcnZlcigpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy52YWx1ZXMoKSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIFRPRE86IG9uIHY2IHRhcmdldCBzaG91bGQgYmUgZ2l2ZW4gZXhwbGljaXRseSAmIHJlbW92ZSB0aGUge3RhcmdldDogJ3NzLXRhcmdldCd9IGNhc2VcbiAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5XG5cbiAgICAvLyBUT0RPOiB2NiBPbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLiBVc2Ugcm9vdE1hcmdpbiBvbmx5XG4gICAgY29uZmlnLnJvb3RNYXJnaW4gPSBjb25maWcub2Zmc2V0ID8gYCR7Y29uZmlnLm9mZnNldH1weCAwcHggLTMwJWAgOiBjb25maWcucm9vdE1hcmdpblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnLnRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zbW9vdGhTY3JvbGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHVucmVnaXN0ZXIgYW55IHByZXZpb3VzIGxpc3RlbmVyc1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0spXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0ssIFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KGV2ZW50LnRhcmdldC5oYXNoKVxuICAgICAgaWYgKG9ic2VydmFibGVTZWN0aW9uKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3Jvb3RFbGVtZW50IHx8IHdpbmRvd1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBvYnNlcnZhYmxlU2VjdGlvbi5vZmZzZXRUb3AgLSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcFxuICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgIHJvb3Quc2Nyb2xsVG8oeyB0b3A6IGhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaHJvbWUgNjAgZG9lc24ndCBzdXBwb3J0IGBzY3JvbGxUb2BcbiAgICAgICAgcm9vdC5zY3JvbGxUb3AgPSBoZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2dldE5ld09ic2VydmVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290OiB0aGlzLl9yb290RWxlbWVudCxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5fY29uZmlnLnRocmVzaG9sZCxcbiAgICAgIHJvb3RNYXJnaW46IHRoaXMuX2NvbmZpZy5yb290TWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHRoaXMuX29ic2VydmVyQ2FsbGJhY2soZW50cmllcyksIG9wdGlvbnMpXG4gIH1cblxuICAvLyBUaGUgbG9naWMgb2Ygc2VsZWN0aW9uXG4gIF9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZW50cnkgPT4gdGhpcy5fdGFyZ2V0TGlua3MuZ2V0KGAjJHtlbnRyeS50YXJnZXQuaWR9YClcbiAgICBjb25zdCBhY3RpdmF0ZSA9IGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3AgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wXG4gICAgICB0aGlzLl9wcm9jZXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudFNjcm9sbFRvcCA9ICh0aGlzLl9yb290RWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcFxuICAgIGNvbnN0IHVzZXJTY3JvbGxzRG93biA9IHBhcmVudFNjcm9sbFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcCA9IHBhcmVudFNjcm9sbFRvcFxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3BcbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgZG93biwgcGljayB0aGUgYmlnZ2VyIG9mZnNldFRvcFxuICAgICAgaWYgKHVzZXJTY3JvbGxzRG93biAmJiBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgYWN0aXZhdGUoZW50cnkpXG4gICAgICAgIC8vIGlmIHBhcmVudCBpc24ndCBzY3JvbGxlZCwgbGV0J3Mga2VlcCB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtLCBicmVha2luZyB0aGUgaXRlcmF0aW9uXG4gICAgICAgIGlmICghcGFyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcbiAgICAgIGlmICghdXNlclNjcm9sbHNEb3duICYmICFlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgYWN0aXZhdGUoZW50cnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKSB7XG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcblxuICAgIGNvbnN0IHRhcmdldExpbmtzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIHRoaXMuX2NvbmZpZy50YXJnZXQpXG5cbiAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB0YXJnZXRMaW5rcykge1xuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIGFuY2hvciBoYXMgYW4gaWQgYW5kIGlzIG5vdCBkaXNhYmxlZFxuICAgICAgaWYgKCFhbmNob3IuaGFzaCB8fCBpc0Rpc2FibGVkKGFuY2hvcikpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGRlY29kZVVSSShhbmNob3IuaGFzaCksIHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBvYnNlcnZhYmxlU2VjdGlvbiBleGlzdHMgJiBpcyB2aXNpYmxlXG4gICAgICBpZiAoaXNWaXNpYmxlKG9ic2VydmFibGVTZWN0aW9uKSkge1xuICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgYW5jaG9yKVxuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcHJvY2Vzcyh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldClcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0aGlzLl9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHsgcmVsYXRlZFRhcmdldDogdGFyZ2V0IH0pXG4gIH1cblxuICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgIC8vIEFjdGl2YXRlIGRyb3Bkb3duIHBhcmVudHNcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NsZWFyQWN0aXZlQ2xhc3MocGFyZW50KSB7XG4gICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmVOb2RlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoYCR7U0VMRUNUT1JfVEFSR0VUX0xJTktTfS4ke0NMQVNTX05BTUVfQUNUSVZFfWAsIHBhcmVudClcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG4gICAgU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2Uoc3B5KVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsIGlzRGlzYWJsZWQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfWBcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IEhPTUVfS0VZID0gJ0hvbWUnXG5jb25zdCBFTkRfS0VZID0gJ0VuZCdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJ1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gYDpub3QoJHtTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9KWBcblxuY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YFxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJyAvLyBUT0RPOiBjb3VsZCBvbmx5IGJlIGB0YWJgIGluIHY2XG5jb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFID0gYC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9UQUJfUEFORUwpXG5cbiAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgICAvLyBUT0RPOiBzaG91bGQgdGhyb3cgZXhjZXB0aW9uIGluIHY2XG4gICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2VsZW1lbnQub3V0ZXJIVE1MfSBoYXMgbm90IGEgdmFsaWQgcGFyZW50ICR7U0VMRUNUT1JfSU5ORVJfRUxFTX1gKVxuICAgIH1cblxuICAgIC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdygpIHsgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKHRoaXMuX2VsZW1Jc0FjdGl2ZShpbm5lckVsZW0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGFjdGl2ZSwgRVZFTlRfSElERSwgeyByZWxhdGVkVGFyZ2V0OiBpbm5lckVsZW0gfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIoaW5uZXJFbGVtLCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQ6IGFjdGl2ZSB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKVxuICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIHRoaXMuX2FjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgYWN0aXZhdGUvc2hvdyB0aGUgcHJvcGVyIHNlY3Rpb25cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGVsZW1lbnQuYmx1cigpXG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIGZhbHNlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOLCB7IHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKCEoW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVksIEhPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSlcbiAgICBsZXQgbmV4dEFjdGl2ZUVsZW1lbnRcblxuICAgIGlmIChbSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gY2hpbGRyZW5bZXZlbnQua2V5ID09PSBIT01FX0tFWSA/IDAgOiBjaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpc05leHQgPSBbQVJST1dfUklHSFRfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudChjaGlsZHJlbiwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2hpbGRyZW4oKSB7IC8vIGNvbGxlY3Rpb24gb2YgaW5uZXIgZWxlbWVudHNcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maW5kKGNoaWxkID0+IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCkpIHx8IG51bGxcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlcyhwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0JylcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZClcbiAgICB9XG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgY2hpbGQgPSB0aGlzLl9nZXRJbm5lckVsZW1lbnQoY2hpbGQpXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpXG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKVxuICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGlzQWN0aXZlKVxuXG4gICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKG91dGVyRWxlbSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhjaGlsZCwgJ3JvbGUnLCAndGFiJylcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzIHRvIHRoZSByZWxhdGVkIHBhbmVsIHRvb1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZClcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGNoaWxkKVxuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKVxuXG4gICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdhcmlhLWxhYmVsbGVkYnknLCBgJHtjaGlsZC5pZH1gKVxuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVEcm9wRG93bihlbGVtZW50LCBvcGVuKSB7XG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCBvdXRlckVsZW0pXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgb3V0ZXJFbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4pXG4gIH1cblxuICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBfZWxlbUlzQWN0aXZlKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gIF9nZXRJbm5lckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm1hdGNoZXMoU0VMRUNUT1JfSU5ORVJfRUxFTSkgPyBlbGVtIDogU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTk5FUl9FTEVNLCBlbGVtKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICBfZ2V0T3V0ZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbG9zZXN0KFNFTEVDVE9SX09VVEVSKSB8fCBlbGVtXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKVxufSlcblxuLyoqXG4gKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gKi9cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFKSkge1xuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpXG4gIH1cbn0pXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCByZWZsb3cgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnIC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpIC8vIEBkZXByZWNhdGVkXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuaXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0Jzoge1xuICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgIGNhc2UgJ2ZvY3Vzb3V0Jzoge1xuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihUb2FzdClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9hc3QpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCAiLyohXHJcbiAqIFNlYXJjaCBtb2RhbCBmb3IgQm9vdHN0cmFwIGJhc2VkIEh5YXMgc2l0ZXNcclxuICogQ29weXJpZ2h0IDIwMjEtMjAyMyBIeWFzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgTW9kYWwsXHJcbn0gZnJvbSAnYm9vdHN0cmFwJztcclxuXHJcbigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gIC8vIERlY2xhcmUgc2VhcmNoIGVsZW1lbnRzXHJcbiAgY29uc3Qgc2VhcmNoVG9nZ2xlTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZU1vYmlsZScpO1xyXG4gIGNvbnN0IHNlYXJjaFRvZ2dsZURlc2t0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVG9nZ2xlRGVza3RvcCcpO1xyXG4gIGNvbnN0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaE1vZGFsJyk7XHJcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXJ5Jyk7XHJcbiAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hSZXN1bHRzJyk7XHJcblxyXG4gIC8vIENyZWF0ZSBzZWFyY2ggbW9kYWxcclxuICBjb25zdCBmbGV4U2VhcmNoTW9kYWwgPSBuZXcgTW9kYWwoc2VhcmNoTW9kYWwsIHtcclxuICAgIGZvY3VzOiB0cnVlLFxyXG4gIH0pXHJcblxyXG4gIC8vIFNob3cgc2VhcmNoIG1vZGFsIHdoZW4gc2VhcmNoIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgc2VhcmNoVG9nZ2xlTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsT25DbGljayk7XHJcbiAgc2VhcmNoVG9nZ2xlRGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbE9uQ2xpY2spO1xyXG5cclxuICBmdW5jdGlvbiBzaG93TW9kYWxPbkNsaWNrKCkge1xyXG4gICAgZmxleFNlYXJjaE1vZGFsLnRvZ2dsZSgpO1xyXG4gICAgLy8gU2hvdyBtZXNzYWdlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVjZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgfVxyXG5cclxuICAvLyBIYW5kbGUga2V5Ym9hcmQgc2hvcnRjdXRzXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bkhhbmRsZXIpO1xyXG5cclxuICBmdW5jdGlvbiBvbktleURvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAvLyBTaG93IHNlYXJjaCBtb2RhbCB3aGVuIFwiQ3RybCArIGtcIiBpcyBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5rZXkgPT09ICdrJyApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZmxleFNlYXJjaE1vZGFsLnNob3coKTtcclxuICAgICAgLy8gQ2xlYXIgaW5wdXQgZmllbGQgYW5kIHNlYXJjaCByZXN1bHRzXHJcbiAgICAgIHNlYXJjaEZvcm0ucmVzZXQoKTtcclxuICAgICAgc2VhcmNoUmVzdWx0cy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAvLyBTaG93IG1lc3NhZ2UgXCJObyByZWNlbnQgc2VhcmNoZXNcIlxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2xlYXIgaW5wdXQgZmllbGQgYW5kIHNlYXJjaCByZXN1bHRzIHdoZW4gXCJFc2NcIiBpcyBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyApIHtcclxuICAgICAgc2VhcmNoRm9ybS5yZXNldCgpO1xyXG4gICAgICBzZWFyY2hSZXN1bHRzLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIC8vIFJlbW92ZSBjbGFzcyBcInNlbGVjdGVkXCIgb24gc2VhcmNoIHJlc3VsdCBhbmQgcmVzZXQgaW5kZXggc2VhcmNoIHJlc3VsdHNcclxuICAgICAgaWYgKHNlYXJjaFJlc3VsdFNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgIGluZGV4ID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gSGlkZSBtZXNzYWdlIFwiTm8gc2VhcmNoIHJlc3VsdHNcIlxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZSBjbGlja2luZyBvbiBtb2RhbCBiYWNrZHJvcFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIENsZWFyIGlucHV0IGZpZWxkIGFuZCBzZWFyY2ggcmVzdWx0cyB3aGVuIGNsaWNraW5nIG9uIG1vZGFsIGJhY2tkcm9wXHJcbiAgICB2YXIgbW9kYWxFbGVtZW50ID0gc2VhcmNoTW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcclxuICAgIGlmICghbW9kYWxFbGVtZW50KSB7XHJcbiAgICAgIHNlYXJjaEZvcm0ucmVzZXQoKTtcclxuICAgICAgc2VhcmNoUmVzdWx0cy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAvLyBIaWRlIG1lc3NhZ2UgXCJObyBzZWFyY2ggcmVzdWx0c1wiXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVzdWx0cycpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGNsYXNzIFwic2VsZWN0ZWRcIiBvbiBzZWFyY2ggcmVzdWx0IGFuZCByZXNldCBpbmRleCBzZWFyY2ggcmVzdWx0c1xyXG4gICAgaWYgKHNlYXJjaFJlc3VsdFNlbGVjdGVkKSB7XHJcbiAgICAgIHJlbW92ZUNsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgaW5kZXggPSAtMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gRm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBlbGVtZW50IHdoZW4gdGhlIHNlYXJjaCBtb2RhbCBpcyBzaG93blxyXG4gIHNlYXJjaE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICB9KVxyXG5cclxuICAvLyBIYW5kbGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBzZWFyY2ggcmVzdWx0cyAgXHJcbiAgLy8gQmFzZWQgb24gaHR0cHM6Ly9jb2RlcGVuLmlvL21laHVsZGVzaWduL3Blbi9lWXBiWE1nXHJcbiAgdmFyIHNlYXJjaFJlc3VsdFNlbGVjdGVkO1xyXG4gIHZhciBpbmRleCA9IC0xO1xyXG4gIFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIGxlbiA9IHNlYXJjaFJlc3VsdHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FydGljbGUnKS5sZW5ndGggLSAxO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgaW5kZXgrKztcclxuICAgICAgaWYgKHNlYXJjaFJlc3VsdFNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBzZWFyY2hSZXN1bHRzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhcnRpY2xlJylbaW5kZXhdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5kZXggPD0gbGVuKSB7XHJcbiAgICAgICAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZCA9IG5leHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkID0gc2VhcmNoUmVzdWx0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXJ0aWNsZScpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRDbGFzcyhzZWFyY2hSZXN1bHRTZWxlY3RlZCwgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZCA9IHNlYXJjaFJlc3VsdHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FydGljbGUnKVswXTtcclxuICAgICAgICBhZGRDbGFzcyhzZWFyY2hSZXN1bHRTZWxlY3RlZCwgJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgaWYgKHNlYXJjaFJlc3VsdFNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgIGluZGV4LS07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBzZWFyY2hSZXN1bHRzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhcnRpY2xlJylbaW5kZXhdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgc2VhcmNoUmVzdWx0U2VsZWN0ZWQgPSBuZXh0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbmRleCA9IGxlbjtcclxuICAgICAgICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkID0gc2VhcmNoUmVzdWx0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXJ0aWNsZScpW2xlbl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZENsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgc2VhcmNoUmVzdWx0U2VsZWN0ZWQgPSBzZWFyY2hSZXN1bHRzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhcnRpY2xlJylbbGVuXTtcclxuICAgICAgICBhZGRDbGFzcyhzZWFyY2hSZXN1bHRTZWxlY3RlZCwgJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBmYWxzZSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGZvY3VzIG9uIHNlbGVjdGVkIHNlYXJjaCByZXN1bHRcclxuICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5ibHVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuICAgIH1cclxuICAgIC8vIFNldCBmb2N1cyBvbiBzZWxlY3RlZCBzZWFyY2ggcmVzdWx0XHJcbiAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZC5xdWVyeVNlbGVjdG9yKCdhJykuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZSBtb3VzZSBuYXZpZ2F0aW9uIHNlYXJjaCByZXN1bHRzXHJcbiAgc2VhcmNoUmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoUmVzdWx0U2VsZWN0ZWQpIHtcclxuICAgIHJlbW92ZUNsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuICB9LCBmYWxzZSk7XHJcblxyXG59KSgpXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQUFBO0FBQUEsSUFBQTtBQUFBLDRCQUFBQTtBQUFBLElBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFFLEdBQUc7QUFDeEUsbUJBQVMsc0JBQXNCLFVBQVU7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQSxJQUNGLEdBQUcsS0FBSztBQUVSLGFBQVMsWUFBWSxJQUFJLFdBQVc7QUFDbEMsVUFBSSxHQUFHLFdBQVc7QUFDaEIsV0FBRyxVQUFVLE9BQU8sU0FBUztBQUFBLE1BQy9CLE9BQU87QUFDTCxXQUFHLFlBQVksR0FBRyxVQUFVLFFBQVEsSUFBSSxPQUFPLFlBQVksVUFBVSxNQUFNLEdBQUcsRUFBRSxLQUFLLEdBQUcsSUFBSSxXQUFXLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDbkg7QUFFQSwyQkFBcUIsY0FBYyxHQUFHLEVBQUUsS0FBSztBQUFBLElBQy9DO0FBRUEsYUFBUyxTQUFTLElBQUksV0FBVztBQUMvQixVQUFJLEdBQUcsV0FBVztBQUNoQixXQUFHLFVBQVUsSUFBSSxTQUFTO0FBQUEsTUFDNUIsT0FBTztBQUNMLFdBQUcsYUFBYSxNQUFNO0FBQUEsTUFDeEI7QUFFQSwyQkFBcUIsY0FBYyxHQUFHLEVBQUUsTUFBTTtBQUFBLElBQ2hEO0FBR0Esa0JBQWMsaUJBQWlCLGFBQWEsTUFBTTtBQUNoRCxVQUFJLHNCQUFzQjtBQUMxQixvQkFBWSxzQkFBc0IsVUFBVTtBQUFBLE1BQzVDO0FBQUEsSUFDRixHQUFHLEtBQUs7QUFBQSxFQUVWLEdBQUc7IiwKICAibmFtZXMiOiBbImNyZWF0ZVBvcHBlciIsICJuYW1lIiwgInN0eWxlIiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJ3aW5kb3ciLCAibWluIiwgIm1heCIsICJ0b1BhZGRpbmdPYmplY3QiLCAicG9wcGVyT2Zmc2V0cyIsICJtaW4iLCAibWF4IiwgIm9mZnNldCIsICJlZmZlY3QiLCAicG9wcGVyIiwgImdldENvbXB1dGVkU3R5bGUiLCAiZWZmZWN0IiwgIndpbmRvdyIsICJoYXNoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJjbGlwcGluZ1BhcmVudHMiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJyZWZlcmVuY2UiLCAicG9wcGVyT2Zmc2V0cyIsICJvZmZzZXQiLCAicGxhY2VtZW50cyIsICJwbGFjZW1lbnQiLCAicGxhY2VtZW50cyIsICJwbGFjZW1lbnQiLCAiX2xvb3AiLCAiX2kiLCAiY2hlY2tzIiwgIm9mZnNldCIsICJwb3BwZXJPZmZzZXRzIiwgIm9mZnNldCIsICJtaW4iLCAibWF4IiwgImZuIiwgIm1lcmdlZCIsICJkZWZhdWx0TW9kaWZpZXJzIiwgImNyZWF0ZVBvcHBlciIsICJyZWZlcmVuY2UiLCAicG9wcGVyIiwgIm9wdGlvbnMiLCAiZm4iLCAic3RhdGUiLCAiZWZmZWN0IiwgIm5vb3BGbiIsICJjcmVhdGVQb3BwZXIiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJjcmVhdGVQb3BwZXIiLCAiZWxlbWVudE1hcCIsICJNYXAiLCAic2V0IiwgImVsZW1lbnQiLCAia2V5IiwgImluc3RhbmNlIiwgImhhcyIsICJpbnN0YW5jZU1hcCIsICJnZXQiLCAic2l6ZSIsICJjb25zb2xlIiwgImVycm9yIiwgIkFycmF5IiwgImZyb20iLCAia2V5cyIsICJyZW1vdmUiLCAiZGVsZXRlIiwgIk1BWF9VSUQiLCAiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCAiVFJBTlNJVElPTl9FTkQiLCAicGFyc2VTZWxlY3RvciIsICJzZWxlY3RvciIsICJ3aW5kb3ciLCAiQ1NTIiwgImVzY2FwZSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgImlkIiwgInRvVHlwZSIsICJvYmplY3QiLCAidW5kZWZpbmVkIiwgIk9iamVjdCIsICJwcm90b3R5cGUiLCAidG9TdHJpbmciLCAiY2FsbCIsICJ0b0xvd2VyQ2FzZSIsICJnZXRVSUQiLCAicHJlZml4IiwgIk1hdGgiLCAiZmxvb3IiLCAicmFuZG9tIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwgInRyYW5zaXRpb25EdXJhdGlvbiIsICJ0cmFuc2l0aW9uRGVsYXkiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsICJOdW1iZXIiLCAicGFyc2VGbG9hdCIsICJmbG9hdFRyYW5zaXRpb25EZWxheSIsICJzcGxpdCIsICJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsICJkaXNwYXRjaEV2ZW50IiwgIkV2ZW50IiwgImlzRWxlbWVudCIsICJqcXVlcnkiLCAibm9kZVR5cGUiLCAiZ2V0RWxlbWVudCIsICJsZW5ndGgiLCAicXVlcnlTZWxlY3RvciIsICJpc1Zpc2libGUiLCAiZ2V0Q2xpZW50UmVjdHMiLCAiZWxlbWVudElzVmlzaWJsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImNsb3NlZERldGFpbHMiLCAiY2xvc2VzdCIsICJzdW1tYXJ5IiwgInBhcmVudE5vZGUiLCAiaXNEaXNhYmxlZCIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiZGlzYWJsZWQiLCAiaGFzQXR0cmlidXRlIiwgImdldEF0dHJpYnV0ZSIsICJmaW5kU2hhZG93Um9vdCIsICJkb2N1bWVudEVsZW1lbnQiLCAiYXR0YWNoU2hhZG93IiwgImdldFJvb3ROb2RlIiwgInJvb3QiLCAiU2hhZG93Um9vdCIsICJub29wIiwgInJlZmxvdyIsICJvZmZzZXRIZWlnaHQiLCAiZ2V0alF1ZXJ5IiwgImpRdWVyeSIsICJib2R5IiwgIkRPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MiLCAib25ET01Db250ZW50TG9hZGVkIiwgImNhbGxiYWNrIiwgInJlYWR5U3RhdGUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJwdXNoIiwgImlzUlRMIiwgImRpciIsICJkZWZpbmVKUXVlcnlQbHVnaW4iLCAicGx1Z2luIiwgIiQiLCAibmFtZSIsICJOQU1FIiwgIkpRVUVSWV9OT19DT05GTElDVCIsICJmbiIsICJqUXVlcnlJbnRlcmZhY2UiLCAiQ29uc3RydWN0b3IiLCAibm9Db25mbGljdCIsICJleGVjdXRlIiwgInBvc3NpYmxlQ2FsbGJhY2siLCAiYXJncyIsICJkZWZhdWx0VmFsdWUiLCAiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsICJ0cmFuc2l0aW9uRWxlbWVudCIsICJ3YWl0Rm9yVHJhbnNpdGlvbiIsICJkdXJhdGlvblBhZGRpbmciLCAiZW11bGF0ZWREdXJhdGlvbiIsICJjYWxsZWQiLCAiaGFuZGxlciIsICJ0YXJnZXQiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJzZXRUaW1lb3V0IiwgImdldE5leHRBY3RpdmVFbGVtZW50IiwgImxpc3QiLCAiYWN0aXZlRWxlbWVudCIsICJzaG91bGRHZXROZXh0IiwgImlzQ3ljbGVBbGxvd2VkIiwgImxpc3RMZW5ndGgiLCAiaW5kZXgiLCAiaW5kZXhPZiIsICJtYXgiLCAibWluIiwgIm5hbWVzcGFjZVJlZ2V4IiwgInN0cmlwTmFtZVJlZ2V4IiwgInN0cmlwVWlkUmVnZXgiLCAiZXZlbnRSZWdpc3RyeSIsICJ1aWRFdmVudCIsICJjdXN0b21FdmVudHMiLCAibW91c2VlbnRlciIsICJtb3VzZWxlYXZlIiwgIm5hdGl2ZUV2ZW50cyIsICJTZXQiLCAibWFrZUV2ZW50VWlkIiwgInVpZCIsICJnZXRFbGVtZW50RXZlbnRzIiwgImJvb3RzdHJhcEhhbmRsZXIiLCAiZXZlbnQiLCAiaHlkcmF0ZU9iaiIsICJkZWxlZ2F0ZVRhcmdldCIsICJvbmVPZmYiLCAiRXZlbnRIYW5kbGVyIiwgIm9mZiIsICJ0eXBlIiwgImFwcGx5IiwgImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwgImRvbUVsZW1lbnRzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZG9tRWxlbWVudCIsICJmaW5kSGFuZGxlciIsICJldmVudHMiLCAiY2FsbGFibGUiLCAiZGVsZWdhdGlvblNlbGVjdG9yIiwgInZhbHVlcyIsICJmaW5kIiwgIm5vcm1hbGl6ZVBhcmFtZXRlcnMiLCAib3JpZ2luYWxUeXBlRXZlbnQiLCAiZGVsZWdhdGlvbkZ1bmN0aW9uIiwgImlzRGVsZWdhdGVkIiwgInR5cGVFdmVudCIsICJnZXRUeXBlRXZlbnQiLCAiYWRkSGFuZGxlciIsICJ3cmFwRnVuY3Rpb24iLCAicmVsYXRlZFRhcmdldCIsICJoYW5kbGVycyIsICJwcmV2aW91c0Z1bmN0aW9uIiwgInJlbW92ZUhhbmRsZXIiLCAiQm9vbGVhbiIsICJyZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMiLCAibmFtZXNwYWNlIiwgInN0b3JlRWxlbWVudEV2ZW50IiwgImhhbmRsZXJLZXkiLCAiZW50cmllcyIsICJpbmNsdWRlcyIsICJvbiIsICJvbmUiLCAiaW5OYW1lc3BhY2UiLCAiaXNOYW1lc3BhY2UiLCAic3RhcnRzV2l0aCIsICJlbGVtZW50RXZlbnQiLCAic2xpY2UiLCAia2V5SGFuZGxlcnMiLCAidHJpZ2dlciIsICJqUXVlcnlFdmVudCIsICJidWJibGVzIiwgIm5hdGl2ZURpc3BhdGNoIiwgImRlZmF1bHRQcmV2ZW50ZWQiLCAiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCAiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCAiaXNEZWZhdWx0UHJldmVudGVkIiwgImV2dCIsICJjYW5jZWxhYmxlIiwgInByZXZlbnREZWZhdWx0IiwgIm9iaiIsICJtZXRhIiwgInZhbHVlIiwgIl91bnVzZWQiLCAiZGVmaW5lUHJvcGVydHkiLCAiY29uZmlndXJhYmxlIiwgIm5vcm1hbGl6ZURhdGEiLCAiSlNPTiIsICJwYXJzZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibm9ybWFsaXplRGF0YUtleSIsICJjaHIiLCAiTWFuaXB1bGF0b3IiLCAic2V0RGF0YUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAiZ2V0RGF0YUF0dHJpYnV0ZXMiLCAiYXR0cmlidXRlcyIsICJic0tleXMiLCAiZGF0YXNldCIsICJmaWx0ZXIiLCAicHVyZUtleSIsICJjaGFyQXQiLCAiZ2V0RGF0YUF0dHJpYnV0ZSIsICJDb25maWciLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJFcnJvciIsICJfZ2V0Q29uZmlnIiwgImNvbmZpZyIsICJfbWVyZ2VDb25maWdPYmoiLCAiX2NvbmZpZ0FmdGVyTWVyZ2UiLCAiX3R5cGVDaGVja0NvbmZpZyIsICJqc29uQ29uZmlnIiwgImNvbnN0cnVjdG9yIiwgImNvbmZpZ1R5cGVzIiwgInByb3BlcnR5IiwgImV4cGVjdGVkVHlwZXMiLCAidmFsdWVUeXBlIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgIlR5cGVFcnJvciIsICJ0b1VwcGVyQ2FzZSIsICJWRVJTSU9OIiwgIkJhc2VDb21wb25lbnQiLCAiX2VsZW1lbnQiLCAiX2NvbmZpZyIsICJEYXRhIiwgIkRBVEFfS0VZIiwgImRpc3Bvc2UiLCAiRVZFTlRfS0VZIiwgInByb3BlcnR5TmFtZSIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgIl9xdWV1ZUNhbGxiYWNrIiwgImlzQW5pbWF0ZWQiLCAiZ2V0SW5zdGFuY2UiLCAiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsICJldmVudE5hbWUiLCAiZ2V0U2VsZWN0b3IiLCAiaHJlZkF0dHJpYnV0ZSIsICJ0cmltIiwgIlNlbGVjdG9yRW5naW5lIiwgImNvbmNhdCIsICJFbGVtZW50IiwgImZpbmRPbmUiLCAiY2hpbGRyZW4iLCAiY2hpbGQiLCAibWF0Y2hlcyIsICJwYXJlbnRzIiwgImFuY2VzdG9yIiwgInByZXYiLCAicHJldmlvdXMiLCAicHJldmlvdXNFbGVtZW50U2libGluZyIsICJuZXh0IiwgIm5leHRFbGVtZW50U2libGluZyIsICJmb2N1c2FibGVDaGlsZHJlbiIsICJmb2N1c2FibGVzIiwgIm1hcCIsICJqb2luIiwgImVsIiwgImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCAiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsICJnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yIiwgImVuYWJsZURpc21pc3NUcmlnZ2VyIiwgImNvbXBvbmVudCIsICJtZXRob2QiLCAiY2xpY2tFdmVudCIsICJ0YWdOYW1lIiwgIkVWRU5UX0NMT1NFIiwgIkVWRU5UX0NMT1NFRCIsICJDTEFTU19OQU1FX0ZBREUiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIkFsZXJ0IiwgImNsb3NlIiwgImNsb3NlRXZlbnQiLCAiX2Rlc3Ryb3lFbGVtZW50IiwgImVhY2giLCAiZGF0YSIsICJEQVRBX0FQSV9LRVkiLCAiQ0xBU1NfTkFNRV9BQ1RJVkUiLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiQnV0dG9uIiwgInRvZ2dsZSIsICJidXR0b24iLCAiRVZFTlRfVE9VQ0hTVEFSVCIsICJFVkVOVF9UT1VDSE1PVkUiLCAiRVZFTlRfVE9VQ0hFTkQiLCAiRVZFTlRfUE9JTlRFUkRPV04iLCAiRVZFTlRfUE9JTlRFUlVQIiwgIlBPSU5URVJfVFlQRV9UT1VDSCIsICJQT0lOVEVSX1RZUEVfUEVOIiwgIkNMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCIsICJTV0lQRV9USFJFU0hPTEQiLCAiZW5kQ2FsbGJhY2siLCAibGVmdENhbGxiYWNrIiwgInJpZ2h0Q2FsbGJhY2siLCAiU3dpcGUiLCAiaXNTdXBwb3J0ZWQiLCAiX2RlbHRhWCIsICJfc3VwcG9ydFBvaW50ZXJFdmVudHMiLCAiUG9pbnRlckV2ZW50IiwgIl9pbml0RXZlbnRzIiwgIl9zdGFydCIsICJ0b3VjaGVzIiwgImNsaWVudFgiLCAiX2V2ZW50SXNQb2ludGVyUGVuVG91Y2giLCAiX2VuZCIsICJfaGFuZGxlU3dpcGUiLCAiX21vdmUiLCAiYWJzRGVsdGFYIiwgImFicyIsICJkaXJlY3Rpb24iLCAiYWRkIiwgInBvaW50ZXJUeXBlIiwgIm5hdmlnYXRvciIsICJtYXhUb3VjaFBvaW50cyIsICJBUlJPV19MRUZUX0tFWSIsICJBUlJPV19SSUdIVF9LRVkiLCAiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsICJPUkRFUl9ORVhUIiwgIk9SREVSX1BSRVYiLCAiRElSRUNUSU9OX0xFRlQiLCAiRElSRUNUSU9OX1JJR0hUIiwgIkVWRU5UX1NMSURFIiwgIkVWRU5UX1NMSUQiLCAiRVZFTlRfS0VZRE9XTiIsICJFVkVOVF9NT1VTRUVOVEVSIiwgIkVWRU5UX01PVVNFTEVBVkUiLCAiRVZFTlRfRFJBR19TVEFSVCIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfQ0FST1VTRUwiLCAiQ0xBU1NfTkFNRV9TTElERSIsICJDTEFTU19OQU1FX0VORCIsICJDTEFTU19OQU1FX1NUQVJUIiwgIkNMQVNTX05BTUVfTkVYVCIsICJDTEFTU19OQU1FX1BSRVYiLCAiU0VMRUNUT1JfQUNUSVZFIiwgIlNFTEVDVE9SX0lURU0iLCAiU0VMRUNUT1JfQUNUSVZFX0lURU0iLCAiU0VMRUNUT1JfSVRFTV9JTUciLCAiU0VMRUNUT1JfSU5ESUNBVE9SUyIsICJTRUxFQ1RPUl9EQVRBX1NMSURFIiwgIlNFTEVDVE9SX0RBVEFfUklERSIsICJLRVlfVE9fRElSRUNUSU9OIiwgImludGVydmFsIiwgImtleWJvYXJkIiwgInBhdXNlIiwgInJpZGUiLCAidG91Y2giLCAid3JhcCIsICJDYXJvdXNlbCIsICJfaW50ZXJ2YWwiLCAiX2FjdGl2ZUVsZW1lbnQiLCAiX2lzU2xpZGluZyIsICJ0b3VjaFRpbWVvdXQiLCAiX3N3aXBlSGVscGVyIiwgIl9pbmRpY2F0b3JzRWxlbWVudCIsICJfYWRkRXZlbnRMaXN0ZW5lcnMiLCAiY3ljbGUiLCAiX3NsaWRlIiwgIm5leHRXaGVuVmlzaWJsZSIsICJoaWRkZW4iLCAiX2NsZWFySW50ZXJ2YWwiLCAiX3VwZGF0ZUludGVydmFsIiwgInNldEludGVydmFsIiwgIl9tYXliZUVuYWJsZUN5Y2xlIiwgInRvIiwgIml0ZW1zIiwgIl9nZXRJdGVtcyIsICJhY3RpdmVJbmRleCIsICJfZ2V0SXRlbUluZGV4IiwgIl9nZXRBY3RpdmUiLCAib3JkZXIiLCAiZGVmYXVsdEludGVydmFsIiwgIl9rZXlkb3duIiwgIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwgImltZyIsICJlbmRDYWxsQmFjayIsICJjbGVhclRpbWVvdXQiLCAic3dpcGVDb25maWciLCAiX2RpcmVjdGlvblRvT3JkZXIiLCAiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCAiYWN0aXZlSW5kaWNhdG9yIiwgIm5ld0FjdGl2ZUluZGljYXRvciIsICJlbGVtZW50SW50ZXJ2YWwiLCAicGFyc2VJbnQiLCAiaXNOZXh0IiwgIm5leHRFbGVtZW50IiwgIm5leHRFbGVtZW50SW5kZXgiLCAidHJpZ2dlckV2ZW50IiwgIl9vcmRlclRvRGlyZWN0aW9uIiwgInNsaWRlRXZlbnQiLCAiaXNDeWNsaW5nIiwgImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwgIm9yZGVyQ2xhc3NOYW1lIiwgImNvbXBsZXRlQ2FsbEJhY2siLCAiX2lzQW5pbWF0ZWQiLCAiY2xlYXJJbnRlcnZhbCIsICJjYXJvdXNlbCIsICJzbGlkZUluZGV4IiwgImNhcm91c2VscyIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkNMQVNTX05BTUVfQ09MTEFQU0UiLCAiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwgIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwgIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwgIkNMQVNTX05BTUVfSE9SSVpPTlRBTCIsICJXSURUSCIsICJIRUlHSFQiLCAiU0VMRUNUT1JfQUNUSVZFUyIsICJwYXJlbnQiLCAiQ29sbGFwc2UiLCAiX2lzVHJhbnNpdGlvbmluZyIsICJfdHJpZ2dlckFycmF5IiwgInRvZ2dsZUxpc3QiLCAiZWxlbSIsICJmaWx0ZXJFbGVtZW50IiwgImZvdW5kRWxlbWVudCIsICJfaW5pdGlhbGl6ZUNoaWxkcmVuIiwgIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCAiX2lzU2hvd24iLCAiaGlkZSIsICJzaG93IiwgImFjdGl2ZUNoaWxkcmVuIiwgIl9nZXRGaXJzdExldmVsQ2hpbGRyZW4iLCAic3RhcnRFdmVudCIsICJhY3RpdmVJbnN0YW5jZSIsICJkaW1lbnNpb24iLCAiX2dldERpbWVuc2lvbiIsICJzdHlsZSIsICJjb21wbGV0ZSIsICJjYXBpdGFsaXplZERpbWVuc2lvbiIsICJzY3JvbGxTaXplIiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJzZWxlY3RlZCIsICJ0cmlnZ2VyQXJyYXkiLCAiaXNPcGVuIiwgIkVTQ0FQRV9LRVkiLCAiVEFCX0tFWSIsICJBUlJPV19VUF9LRVkiLCAiQVJST1dfRE9XTl9LRVkiLCAiUklHSFRfTU9VU0VfQlVUVE9OIiwgIkVWRU5UX0tFWURPV05fREFUQV9BUEkiLCAiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9EUk9QVVAiLCAiQ0xBU1NfTkFNRV9EUk9QRU5EIiwgIkNMQVNTX05BTUVfRFJPUFNUQVJUIiwgIkNMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiIsICJDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiIsICJTRUxFQ1RPUl9NRU5VIiwgIlNFTEVDVE9SX05BVkJBUiIsICJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwgIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCAiUExBQ0VNRU5UX1RPUCIsICJQTEFDRU1FTlRfVE9QRU5EIiwgIlBMQUNFTUVOVF9CT1RUT00iLCAiUExBQ0VNRU5UX0JPVFRPTUVORCIsICJQTEFDRU1FTlRfUklHSFQiLCAiUExBQ0VNRU5UX0xFRlQiLCAiUExBQ0VNRU5UX1RPUENFTlRFUiIsICJQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSIiwgImF1dG9DbG9zZSIsICJib3VuZGFyeSIsICJkaXNwbGF5IiwgIm9mZnNldCIsICJwb3BwZXJDb25maWciLCAicmVmZXJlbmNlIiwgIkRyb3Bkb3duIiwgIl9wb3BwZXIiLCAiX3BhcmVudCIsICJfbWVudSIsICJfaW5OYXZiYXIiLCAiX2RldGVjdE5hdmJhciIsICJzaG93RXZlbnQiLCAiX2NyZWF0ZVBvcHBlciIsICJmb2N1cyIsICJfY29tcGxldGVIaWRlIiwgImRlc3Ryb3kiLCAidXBkYXRlIiwgImhpZGVFdmVudCIsICJQb3BwZXIiLCAicmVmZXJlbmNlRWxlbWVudCIsICJfZ2V0UG9wcGVyQ29uZmlnIiwgImNyZWF0ZVBvcHBlciIsICJfZ2V0UGxhY2VtZW50IiwgInBhcmVudERyb3Bkb3duIiwgImlzRW5kIiwgIl9nZXRPZmZzZXQiLCAicG9wcGVyRGF0YSIsICJkZWZhdWx0QnNQb3BwZXJDb25maWciLCAicGxhY2VtZW50IiwgIm1vZGlmaWVycyIsICJvcHRpb25zIiwgImVuYWJsZWQiLCAiX3NlbGVjdE1lbnVJdGVtIiwgImNsZWFyTWVudXMiLCAib3BlblRvZ2dsZXMiLCAiY29udGV4dCIsICJjb21wb3NlZFBhdGgiLCAiaXNNZW51VGFyZ2V0IiwgImRhdGFBcGlLZXlkb3duSGFuZGxlciIsICJpc0lucHV0IiwgImlzRXNjYXBlRXZlbnQiLCAiaXNVcE9yRG93bkV2ZW50IiwgImdldFRvZ2dsZUJ1dHRvbiIsICJzdG9wUHJvcGFnYXRpb24iLCAiRVZFTlRfTU9VU0VET1dOIiwgImNsYXNzTmFtZSIsICJjbGlja0NhbGxiYWNrIiwgInJvb3RFbGVtZW50IiwgIkJhY2tkcm9wIiwgIl9pc0FwcGVuZGVkIiwgIl9hcHBlbmQiLCAiX2dldEVsZW1lbnQiLCAiX2VtdWxhdGVBbmltYXRpb24iLCAiYmFja2Ryb3AiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiRVZFTlRfRk9DVVNJTiIsICJFVkVOVF9LRVlET1dOX1RBQiIsICJUQUJfTkFWX0ZPUldBUkQiLCAiVEFCX05BVl9CQUNLV0FSRCIsICJhdXRvZm9jdXMiLCAidHJhcEVsZW1lbnQiLCAiRm9jdXNUcmFwIiwgIl9pc0FjdGl2ZSIsICJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsICJhY3RpdmF0ZSIsICJfaGFuZGxlRm9jdXNpbiIsICJfaGFuZGxlS2V5ZG93biIsICJkZWFjdGl2YXRlIiwgImVsZW1lbnRzIiwgInNoaWZ0S2V5IiwgIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCAiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCAiUFJPUEVSVFlfUEFERElORyIsICJQUk9QRVJUWV9NQVJHSU4iLCAiU2Nyb2xsQmFySGVscGVyIiwgImdldFdpZHRoIiwgImRvY3VtZW50V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAiaW5uZXJXaWR0aCIsICJ3aWR0aCIsICJfZGlzYWJsZU92ZXJGbG93IiwgIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsICJjYWxjdWxhdGVkVmFsdWUiLCAicmVzZXQiLCAiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCAiaXNPdmVyZmxvd2luZyIsICJfc2F2ZUluaXRpYWxBdHRyaWJ1dGUiLCAib3ZlcmZsb3ciLCAic3R5bGVQcm9wZXJ0eSIsICJzY3JvbGxiYXJXaWR0aCIsICJtYW5pcHVsYXRpb25DYWxsQmFjayIsICJzZXRQcm9wZXJ0eSIsICJfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayIsICJhY3R1YWxWYWx1ZSIsICJyZW1vdmVQcm9wZXJ0eSIsICJjYWxsQmFjayIsICJzZWwiLCAiRVZFTlRfSElERV9QUkVWRU5URUQiLCAiRVZFTlRfUkVTSVpFIiwgIkVWRU5UX0NMSUNLX0RJU01JU1MiLCAiRVZFTlRfTU9VU0VET1dOX0RJU01JU1MiLCAiRVZFTlRfS0VZRE9XTl9ESVNNSVNTIiwgIkNMQVNTX05BTUVfT1BFTiIsICJDTEFTU19OQU1FX1NUQVRJQyIsICJPUEVOX1NFTEVDVE9SIiwgIlNFTEVDVE9SX0RJQUxPRyIsICJTRUxFQ1RPUl9NT0RBTF9CT0RZIiwgIk1vZGFsIiwgIl9kaWFsb2ciLCAiX2JhY2tkcm9wIiwgIl9pbml0aWFsaXplQmFja0Ryb3AiLCAiX2ZvY3VzdHJhcCIsICJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsICJfc2Nyb2xsQmFyIiwgIl9hZGp1c3REaWFsb2ciLCAiX3Nob3dFbGVtZW50IiwgIl9oaWRlTW9kYWwiLCAiaGFuZGxlVXBkYXRlIiwgInNjcm9sbFRvcCIsICJtb2RhbEJvZHkiLCAidHJhbnNpdGlvbkNvbXBsZXRlIiwgIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwgImV2ZW50MiIsICJfcmVzZXRBZGp1c3RtZW50cyIsICJpc01vZGFsT3ZlcmZsb3dpbmciLCAic2Nyb2xsSGVpZ2h0IiwgImNsaWVudEhlaWdodCIsICJpbml0aWFsT3ZlcmZsb3dZIiwgIm92ZXJmbG93WSIsICJpc0JvZHlPdmVyZmxvd2luZyIsICJwYWRkaW5nTGVmdCIsICJwYWRkaW5nUmlnaHQiLCAiYWxyZWFkeU9wZW4iLCAiQ0xBU1NfTkFNRV9TSE9XSU5HIiwgIkNMQVNTX05BTUVfSElESU5HIiwgIkNMQVNTX05BTUVfQkFDS0RST1AiLCAic2Nyb2xsIiwgIk9mZmNhbnZhcyIsICJibHVyIiwgImNvbXBsZXRlQ2FsbGJhY2siLCAicG9zaXRpb24iLCAiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsICJEZWZhdWx0QWxsb3dsaXN0IiwgImEiLCAiYXJlYSIsICJiIiwgImJyIiwgImNvbCIsICJjb2RlIiwgImRpdiIsICJlbSIsICJociIsICJoMSIsICJoMiIsICJoMyIsICJoNCIsICJoNSIsICJoNiIsICJpIiwgImxpIiwgIm9sIiwgInAiLCAicHJlIiwgInMiLCAic21hbGwiLCAic3BhbiIsICJzdWIiLCAic3VwIiwgInN0cm9uZyIsICJ1IiwgInVsIiwgInVyaUF0dHJpYnV0ZXMiLCAiU0FGRV9VUkxfUEFUVEVSTiIsICJhbGxvd2VkQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJhbGxvd2VkQXR0cmlidXRlTGlzdCIsICJhdHRyaWJ1dGVOYW1lIiwgIm5vZGVOYW1lIiwgIm5vZGVWYWx1ZSIsICJhdHRyaWJ1dGVSZWdleCIsICJzb21lIiwgInJlZ2V4IiwgInNhbml0aXplSHRtbCIsICJ1bnNhZmVIdG1sIiwgImFsbG93TGlzdCIsICJzYW5pdGl6ZUZ1bmN0aW9uIiwgImRvbVBhcnNlciIsICJET01QYXJzZXIiLCAiY3JlYXRlZERvY3VtZW50IiwgInBhcnNlRnJvbVN0cmluZyIsICJlbGVtZW50TmFtZSIsICJhdHRyaWJ1dGVMaXN0IiwgImFsbG93ZWRBdHRyaWJ1dGVzIiwgImlubmVySFRNTCIsICJjb250ZW50IiwgImV4dHJhQ2xhc3MiLCAiaHRtbCIsICJzYW5pdGl6ZSIsICJzYW5pdGl6ZUZuIiwgInRlbXBsYXRlIiwgIkRlZmF1bHRDb250ZW50VHlwZSIsICJlbnRyeSIsICJUZW1wbGF0ZUZhY3RvcnkiLCAiZ2V0Q29udGVudCIsICJfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24iLCAiaGFzQ29udGVudCIsICJjaGFuZ2VDb250ZW50IiwgIl9jaGVja0NvbnRlbnQiLCAidG9IdG1sIiwgInRlbXBsYXRlV3JhcHBlciIsICJfbWF5YmVTYW5pdGl6ZSIsICJ0ZXh0IiwgIl9zZXRDb250ZW50IiwgImFyZyIsICJ0ZW1wbGF0ZUVsZW1lbnQiLCAiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwgInRleHRDb250ZW50IiwgIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsICJDTEFTU19OQU1FX01PREFMIiwgIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCAiU0VMRUNUT1JfTU9EQUwiLCAiRVZFTlRfTU9EQUxfSElERSIsICJUUklHR0VSX0hPVkVSIiwgIlRSSUdHRVJfRk9DVVMiLCAiVFJJR0dFUl9DTElDSyIsICJUUklHR0VSX01BTlVBTCIsICJFVkVOVF9JTlNFUlRFRCIsICJFVkVOVF9DTElDSyIsICJFVkVOVF9GT0NVU09VVCIsICJBdHRhY2htZW50TWFwIiwgIkFVVE8iLCAiVE9QIiwgIlJJR0hUIiwgIkJPVFRPTSIsICJMRUZUIiwgImFuaW1hdGlvbiIsICJjb250YWluZXIiLCAiY3VzdG9tQ2xhc3MiLCAiZGVsYXkiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgInRpdGxlIiwgIlRvb2x0aXAiLCAiX2lzRW5hYmxlZCIsICJfdGltZW91dCIsICJfaXNIb3ZlcmVkIiwgIl9hY3RpdmVUcmlnZ2VyIiwgIl90ZW1wbGF0ZUZhY3RvcnkiLCAiX25ld0NvbnRlbnQiLCAidGlwIiwgIl9zZXRMaXN0ZW5lcnMiLCAiX2ZpeFRpdGxlIiwgImVuYWJsZSIsICJkaXNhYmxlIiwgInRvZ2dsZUVuYWJsZWQiLCAiY2xpY2siLCAiX2xlYXZlIiwgIl9lbnRlciIsICJfaGlkZU1vZGFsSGFuZGxlciIsICJfZGlzcG9zZVBvcHBlciIsICJfaXNXaXRoQ29udGVudCIsICJzaGFkb3dSb290IiwgImlzSW5UaGVEb20iLCAib3duZXJEb2N1bWVudCIsICJfZ2V0VGlwRWxlbWVudCIsICJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsICJfZ2V0VGl0bGUiLCAiX2NyZWF0ZVRpcEVsZW1lbnQiLCAiX2dldENvbnRlbnRGb3JUZW1wbGF0ZSIsICJfZ2V0VGVtcGxhdGVGYWN0b3J5IiwgInRpcElkIiwgInNldENvbnRlbnQiLCAiX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCIsICJfZ2V0RGVsZWdhdGVDb25maWciLCAiYXR0YWNobWVudCIsICJwaGFzZSIsICJzdGF0ZSIsICJ0cmlnZ2VycyIsICJldmVudEluIiwgImV2ZW50T3V0IiwgIl9zZXRUaW1lb3V0IiwgInRpbWVvdXQiLCAiZGF0YUF0dHJpYnV0ZXMiLCAiZGF0YUF0dHJpYnV0ZSIsICJTRUxFQ1RPUl9USVRMRSIsICJTRUxFQ1RPUl9DT05URU5UIiwgIlBvcG92ZXIiLCAiX2dldENvbnRlbnQiLCAiRVZFTlRfQUNUSVZBVEUiLCAiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwgIlNFTEVDVE9SX0RBVEFfU1BZIiwgIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsICJTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCIsICJTRUxFQ1RPUl9OQVZfTElOS1MiLCAiU0VMRUNUT1JfTkFWX0lURU1TIiwgIlNFTEVDVE9SX0xJU1RfSVRFTVMiLCAiU0VMRUNUT1JfTElOS19JVEVNUyIsICJTRUxFQ1RPUl9EUk9QRE9XTiIsICJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCAicm9vdE1hcmdpbiIsICJzbW9vdGhTY3JvbGwiLCAidGhyZXNob2xkIiwgIlNjcm9sbFNweSIsICJfdGFyZ2V0TGlua3MiLCAiX29ic2VydmFibGVTZWN0aW9ucyIsICJfcm9vdEVsZW1lbnQiLCAiX2FjdGl2ZVRhcmdldCIsICJfb2JzZXJ2ZXIiLCAiX3ByZXZpb3VzU2Nyb2xsRGF0YSIsICJ2aXNpYmxlRW50cnlUb3AiLCAicGFyZW50U2Nyb2xsVG9wIiwgInJlZnJlc2giLCAiX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMiLCAiX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsIiwgImRpc2Nvbm5lY3QiLCAiX2dldE5ld09ic2VydmVyIiwgInNlY3Rpb24iLCAib2JzZXJ2ZSIsICJvYnNlcnZhYmxlU2VjdGlvbiIsICJoYXNoIiwgImhlaWdodCIsICJvZmZzZXRUb3AiLCAic2Nyb2xsVG8iLCAidG9wIiwgImJlaGF2aW9yIiwgIkludGVyc2VjdGlvbk9ic2VydmVyIiwgIl9vYnNlcnZlckNhbGxiYWNrIiwgInRhcmdldEVsZW1lbnQiLCAiX3Byb2Nlc3MiLCAidXNlclNjcm9sbHNEb3duIiwgImlzSW50ZXJzZWN0aW5nIiwgIl9jbGVhckFjdGl2ZUNsYXNzIiwgImVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyIsICJ0YXJnZXRMaW5rcyIsICJhbmNob3IiLCAiZGVjb2RlVVJJIiwgIl9hY3RpdmF0ZVBhcmVudHMiLCAibGlzdEdyb3VwIiwgIml0ZW0iLCAiYWN0aXZlTm9kZXMiLCAibm9kZSIsICJzcHkiLCAiSE9NRV9LRVkiLCAiRU5EX0tFWSIsICJDTEFTU19EUk9QRE9XTiIsICJTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VIiwgIk5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCAiU0VMRUNUT1JfVEFCX1BBTkVMIiwgIlNFTEVDVE9SX09VVEVSIiwgIlNFTEVDVE9SX0lOTkVSIiwgIlNFTEVDVE9SX0lOTkVSX0VMRU0iLCAiU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFIiwgIlRhYiIsICJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCAiX2dldENoaWxkcmVuIiwgImlubmVyRWxlbSIsICJfZWxlbUlzQWN0aXZlIiwgImFjdGl2ZSIsICJfZ2V0QWN0aXZlRWxlbSIsICJfZGVhY3RpdmF0ZSIsICJfYWN0aXZhdGUiLCAicmVsYXRlZEVsZW0iLCAiX3RvZ2dsZURyb3BEb3duIiwgIm5leHRBY3RpdmVFbGVtZW50IiwgInByZXZlbnRTY3JvbGwiLCAiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwgIl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQiLCAiX2dldElubmVyRWxlbWVudCIsICJpc0FjdGl2ZSIsICJvdXRlckVsZW0iLCAiX2dldE91dGVyRWxlbWVudCIsICJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwgIm9wZW4iLCAiRVZFTlRfTU9VU0VPVkVSIiwgIkVWRU5UX01PVVNFT1VUIiwgIkNMQVNTX05BTUVfSElERSIsICJhdXRvaGlkZSIsICJUb2FzdCIsICJfaGFzTW91c2VJbnRlcmFjdGlvbiIsICJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsICJfY2xlYXJUaW1lb3V0IiwgIl9tYXliZVNjaGVkdWxlSGlkZSIsICJpc1Nob3duIiwgIl9vbkludGVyYWN0aW9uIiwgImlzSW50ZXJhY3RpbmciXQp9Cg==
