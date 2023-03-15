
    const tien = document.querySelector("#tien");
    const thoi_gian_tra = document.querySelector("#thoi_gian_tra");
    const lai_xuat = document.querySelector("#lai_xuat");
    const tien_phai_tra = document.querySelector("#tien_phai_tra");
    const tong_tien_phai_tra = document.querySelector("#tong_tien_phai_tra");
    const tong_lai_phai_tra = document.querySelector("#tong_lai_phai_tra");

    function tinh() {
        let x = Math.pow(1 + lai_xuat.value, thoi_gian_tra.value);
        let a = (tien.value * x * lai_xuat.value) / (x - 1);
        tien_phai_tra.value = a.toFixed(1);
        let b = a * thoi_gian_tra.value;
        tong_tien_phai_tra.value = b.toFixed(1);
        let c = b - tien.value;
        tong_lai_phai_tra.value = c.toFixed(1);
    }
