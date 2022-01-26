
// Porcentajes y descuentos

// const precioOriginal = 120;
// const descuento = 18;
coupons = [
    {
        name: "D15",
        discount: 15,
    },
    {
        name: "D25",
        discount: 25,
    },
    {
        name: "D50",
        discount: 50,
    },
    {
        name: "D60",
        discount: 60,
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

console.log(calcularPrecioConDescuento(300, 30));

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento
// })

function onClickButtonPriceDiscount() {

    inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;

    inputCoupon = document.getElementById("input-coupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert(`Cupón ${couponValue} no válido`)
    } else {
        const descuento = userCoupon.discount
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)
        document.getElementById("result-price").innerText = `El precio es $${precioConDescuento}`;
    }

}