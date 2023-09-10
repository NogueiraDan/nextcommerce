exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 3729:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8945));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 636))

/***/ }),

/***/ 3603:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 8945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/Header/header.module.css
var header_module = __webpack_require__(7328);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./context/cartContext.tsx
var cartContext = __webpack_require__(636);
// EXTERNAL MODULE: ./components/Cart/cart.module.css
var cart_module = __webpack_require__(3706);
var cart_module_default = /*#__PURE__*/__webpack_require__.n(cart_module);
;// CONCATENATED MODULE: ./components/Cart/index.tsx






const Cart = ({ open, setOpen })=>{
    const { cart, removeFromCart, clearCart, cartTotalPrice, decrementQuantity, incrementQuantity } = (0,cartContext.useCart)();
    const handleRemoveItem = (itemId)=>{
        removeFromCart(itemId);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (cart_module_default()).cart,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (cart_module_default()).cartHeader,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Carrinho"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: ()=>setOpen(!open),
                        className: (cart_module_default()).iconClose,
                        children: "Fechar"
                    })
                ]
            }),
            cart.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (cart_module_default()).cartBody,
                        children: cart.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (cart_module_default()).productWrapper,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: (cart_module_default()).productImage,
                                                src: item.image,
                                                alt: "Imagem do produto",
                                                width: 60,
                                                height: 60
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (cart_module_default()).productName,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "Quantidade: ",
                                                        item.quantity
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "R$",
                                                        item.price,
                                                        "/unidade"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: (cart_module_default()).productRemove,
                                            onClick: ()=>handleRemoveItem(item.id),
                                            src: "/icon-remove.svg",
                                            alt: "Imagem do produto",
                                            width: 20,
                                            height: 20
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (cart_module_default()).checkoutProductQuantity,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (cart_module_default()).quantitySelector,
                                                    onClick: ()=>decrementQuantity(item.id),
                                                    children: "-"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: item.quantity
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (cart_module_default()).quantitySelector,
                                                    onClick: ()=>incrementQuantity(item.id),
                                                    children: "+"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            });
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "TOTAL: "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: cartTotalPrice
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/checkout",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (cart_module_default()).btnCheckout,
                            children: "FINALIZAR A COMPRA"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (cart_module_default()).btnClearCart,
                        onClick: clearCart,
                        children: "ESVAZAIR O CARRINHO"
                    })
                ]
            }),
            cart.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Seu carrinho t\xe1 vazio!"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Cart = (Cart);

;// CONCATENATED MODULE: ./components/Header/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Header() {
    const [open, setOpen] = (0,react_.useState)(false);
    const { cart } = (0,cartContext.useCart)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).colLeft,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (header_module_default()).logo,
                        src: "/devstore.png",
                        alt: "Next.js Logo",
                        width: 180,
                        height: 37
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).colRight,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).searchWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                placeholder: "Procurando por algo espec\xedfico?",
                                className: (header_module_default()).search
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (header_module_default()).iconSearch,
                                src: "/icon-search.svg",
                                alt: "Next.js Logo",
                                width: 30,
                                height: 30,
                                onClick: ()=>alert("Buscou!")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).cartWrapper,
                        onClick: ()=>setOpen(!open),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/icon-cart.svg",
                                alt: "Next.js Logo",
                                width: 30,
                                height: 30
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (header_module_default()).cartNotification,
                                children: cart.length
                            })
                        ]
                    }),
                    open && /*#__PURE__*/ jsx_runtime_.jsx(components_Cart, {
                        setOpen: setOpen,
                        open: open
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartContext: () => (/* binding */ CartContext),
/* harmony export */   CartProvider: () => (/* binding */ CartProvider),
/* harmony export */   useCart: () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ CartContext,CartProvider,useCart auto */ 

// Criando o contexto
const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
// Hook customizado para utilizar o contexto dentro do Provider
const useCart = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
};
// Componente provedor do contexto
const CartProvider = ({ children })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Carrega os produtos do localStorage quando o componente é montado
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [cartTotalPrice, setCartTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let itemPrice;
        let totalPrice = 0;
        let totalPriceFloat;
        cart.forEach((item)=>{
            itemPrice = parseFloat(item.price) * (item.quantity ?? 0);
            totalPrice = totalPrice + itemPrice;
            totalPriceFloat = totalPrice.toFixed(2);
        });
        setCartTotalPrice(totalPriceFloat);
    }, [
        cart
    ]);
    const addToCart = (item)=>{
        const existingItemIndex = cart.findIndex((cartItem)=>cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            // Se o item já existe no carrinho, atualize a quantidade
            const updatedCart = [
                ...cart
            ];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
            // Atualiza o localStorage com o novo carrinho após setCart
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            // Se o item não existe no carrinho, adicione-o com quantidade 1
            const updatedCart = [
                ...cart,
                {
                    ...item,
                    quantity: 1
                }
            ];
            setCart(updatedCart);
            // Atualiza o localStorage com o novo carrinho após setCart
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };
    const removeFromCart = (itemId)=>{
        const updatedCart = cart.filter((item)=>item.id !== itemId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };
    const clearCart = ()=>{
        setCart([]);
        localStorage.removeItem("cart");
    };
    const incrementQuantity = (itemId)=>{
        const itemIndex = cart.findIndex((cartItem)=>cartItem.id === itemId);
        const updatedCart = [
            ...cart
        ];
        updatedCart[itemIndex].quantity += 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const decrementQuantity = (itemId)=>{
        const itemIndex = cart.findIndex((cartItem)=>cartItem.id === itemId);
        const updatedCart = [
            ...cart
        ];
        if (updatedCart[itemIndex].quantity == 1) {
            return;
        }
        updatedCart[itemIndex].quantity -= 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    // Criando o objeto de contexto
    const cartContextValue = {
        cart,
        cartTotalPrice,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: cartContextValue,
        children: children
    });
};



/***/ }),

/***/ 3706:
/***/ ((module) => {

// Exports
module.exports = {
	"cart": "cart_cart__6puf1",
	"cartHeader": "cart_cartHeader__n8n5z",
	"iconClose": "cart_iconClose___VxAU",
	"productWrapper": "cart_productWrapper__O6B9G",
	"productImage": "cart_productImage__Vr6O3",
	"productName": "cart_productName__ff_Js",
	"productRemove": "cart_productRemove__sP4UK",
	"checkoutProductQuantity": "cart_checkoutProductQuantity__FZBa4",
	"quantitySelector": "cart_quantitySelector__VI85F",
	"btnCheckout": "cart_btnCheckout__3oK89",
	"btnClearCart": "cart_btnClearCart__r5atN"
};


/***/ }),

/***/ 7328:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__us6ao",
	"colLeft": "header_colLeft__Ta8FX",
	"colRight": "header_colRight__EHMtm",
	"search": "header_search__DWzt7",
	"iconSearch": "header_iconSearch__tHdfx",
	"searchWrapper": "header_searchWrapper__2tetx",
	"cartWrapper": "header_cartWrapper__dFB7V",
	"cartNotification": "header_cartNotification__0veR9"
};


/***/ }),

/***/ 7614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Saira","arguments":[{"subsets":["latin"]}],"variableName":"saira"}
var target_path_app_layout_tsx_import_Saira_arguments_subsets_latin_variableName_saira_ = __webpack_require__(4179);
var target_path_app_layout_tsx_import_Saira_arguments_subsets_latin_variableName_saira_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Saira_arguments_subsets_latin_variableName_saira_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/Header/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\Daniel Nogueira\Documents\Programação\Práticas\NextJS\nextcommerce\components\Header\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./context/cartContext.tsx

const cartContext_proxy = (0,module_proxy.createProxy)(String.raw`E:\Daniel Nogueira\Documents\Programação\Práticas\NextJS\nextcommerce\context\cartContext.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: cartContext_esModule, $$typeof: cartContext_$$typeof } = cartContext_proxy;
const cartContext_default_ = cartContext_proxy.default;

const e0 = cartContext_proxy["CartContext"];

const e1 = cartContext_proxy["CartProvider"];

const e2 = cartContext_proxy["useCart"];

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Caputeeno Ecommerce",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_tsx_import_Saira_arguments_subsets_latin_variableName_saira_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e1, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        children
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"256x256"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;