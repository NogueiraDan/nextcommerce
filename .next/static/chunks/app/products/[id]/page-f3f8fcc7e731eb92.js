(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{70:function(e,t,r){Promise.resolve().then(r.bind(r,8969))},8969:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(7437),i=r(2265),c=r(5775),o=r.n(c),n=r(6691),s=r.n(n);async function l(e){let t=await fetch("https://fakestoreapi.com/products/".concat(e));if(!t.ok)throw Error("Algo deu errado.");return t.json()}var d=r(1396),u=r.n(d),p=r(3014);function g(e){let{params:t}=e;(0,i.useEffect)(()=>{let e=l(t.id);e.then(e=>{c(e)}).catch(e=>{console.log(e)})},[]);let[r,c]=(0,i.useState)([]),{addToCart:n,cart:d}=(0,p.useCart)();return(0,a.jsxs)("div",{className:o().main,children:[(0,a.jsxs)("div",{className:o().colLeft,children:[(0,a.jsxs)("p",{className:o().voltar,children:[(0,a.jsx)(s(),{className:o().iconBack,src:"/icon-back.svg",alt:"Imagem do produto",width:22,height:22}),(0,a.jsx)(u(),{href:"/products",children:"Voltar"})]}),(0,a.jsx)("div",{className:o().productImage,children:(0,a.jsx)(s(),{src:r.image,alt:"Product image",width:450,height:450})})]}),(0,a.jsxs)("div",{className:o().colRight,children:[(0,a.jsx)("p",{className:o().category,children:r.category}),(0,a.jsx)("h1",{className:o().productName,children:r.title}),(0,a.jsxs)("p",{className:o().price,children:["R$ ",r.price]}),(0,a.jsx)("p",{className:o().description,children:"Descri\xe7\xe3o"}),(0,a.jsx)("p",{className:o().textDescription,children:r.description}),(0,a.jsx)("p",{className:o().textShipping,children:"*Frete de R$40,00 para todo o Brasil. Gr\xe1tis para compras acima de R$200,00."}),(0,a.jsxs)("button",{className:o().btnAddToCart,onClick:()=>{n(r),alert("Produto adicionado ao carrinho!"),console.log("Carrinho atual:",d)},children:[" ","Adicionar ao carrinho"]})]})]})}},3014:function(e,t,r){"use strict";r.r(t),r.d(t,{CartContext:function(){return c},CartProvider:function(){return n},useCart:function(){return o}});var a=r(7437),i=r(2265);let c=(0,i.createContext)(void 0),o=()=>{let e=(0,i.useContext)(c);if(!e)throw Error("useCart deve ser usado dentro de um CartProvider");return e},n=e=>{let{children:t}=e;(0,i.useEffect)(()=>{let e=localStorage.getItem("cart");e&&o(JSON.parse(e))},[]);let[r,o]=(0,i.useState)([]),[n,s]=(0,i.useState)();return(0,i.useEffect)(()=>{let e;let t=0;r.forEach(r=>{var a;t+=parseFloat(r.price)*(null!==(a=r.quantity)&&void 0!==a?a:0),e=t.toFixed(2)}),s(e)},[r]),(0,a.jsx)(c.Provider,{value:{cart:r,cartTotalPrice:n,addToCart:e=>{let t=r.findIndex(t=>t.id===e.id);if(-1!==t){let e=[...r];e[t].quantity+=1,o(e),localStorage.setItem("cart",JSON.stringify(e))}else{let t=[...r,{...e,quantity:1}];o(t),localStorage.setItem("cart",JSON.stringify(t))}},removeFromCart:e=>{let t=r.filter(t=>t.id!==e);localStorage.setItem("cart",JSON.stringify(t)),o(t)},incrementQuantity:e=>{let t=r.findIndex(t=>t.id===e),a=[...r];a[t].quantity+=1,o(a),localStorage.setItem("cart",JSON.stringify(a))},decrementQuantity:e=>{let t=r.findIndex(t=>t.id===e),a=[...r];1!=a[t].quantity&&(a[t].quantity-=1,o(a),localStorage.setItem("cart",JSON.stringify(a)))},clearCart:()=>{o([]),localStorage.removeItem("cart")}},children:t})}},5775:function(e){e.exports={main:"page_main__UrAG2",colLeft:"page_colLeft__g6URA",voltar:"page_voltar___4AcP",iconBack:"page_iconBack__aQCQu",colRight:"page_colRight__Q5gDT",category:"page_category__0thwT",price:"page_price__Hp1pS",description:"page_description__WiGtt",textDescription:"page_textDescription__8P5Nh",textShipping:"page_textShipping___KF8s",btnAddToCart:"page_btnAddToCart__SevQ1",productName:"page_productName__I_wEh",productImage:"page_productImage__o0eGl"}}},function(e){e.O(0,[685,165,971,596,744],function(){return e(e.s=70)}),_N_E=e.O()}]);