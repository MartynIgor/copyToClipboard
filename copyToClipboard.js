document.addEventListener("DOMContentLoaded", function() {
    const coupons = document.querySelectorAll(".coupon");

    coupons.forEach(coupon => {
        coupon.addEventListener("mouseover", () => {
            const tooltip = document.createElement("span");
            tooltip.textContent = "Click to copy!";
            tooltip.style.position = "absolute";
            tooltip.style.backgroundColor = "#DB3753";
            tooltip.style.color = "white";
            tooltip.style.padding = "5px";
            tooltip.style.borderRadius = "5px";
            tooltip.style.top = "-30px";
            tooltip.style.left = "50%";
            tooltip.style.transform = "translateX(-50%)";
            tooltip.style.zIndex = "10";
            coupon.appendChild(tooltip);
        });

        coupon.addEventListener("mouseout", () => {
            if (coupon.lastChild.nodeName === "SPAN") {
                coupon.removeChild(coupon.lastChild);
            }
        });

        coupon.addEventListener("click", () => {
            const textarea = document.createElement("textarea");
            textarea.value = coupon.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            
            const copiedTooltip = document.createElement("span");
            copiedTooltip.textContent = "Coupon copied!";
            copiedTooltip.style.position = "absolute";
            copiedTooltip.style.backgroundColor = "#DB3753";
            copiedTooltip.style.color = "white";
            copiedTooltip.style.padding = "5px";
            copiedTooltip.style.borderRadius = "5px";
            copiedTooltip.style.top = "-30px";
            copiedTooltip.style.left = "50%";
            copiedTooltip.style.transform = "translateX(-50%)";
            copiedTooltip.style.zIndex = "10";
            coupon.appendChild(copiedTooltip);

            setTimeout(() => {
                coupon.removeChild(copiedTooltip);
            }, 2000);
        });
    });
});
