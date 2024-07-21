import React from "react";

function covidForm() {
    const index = Provinces.findIndex((item) => item.kota === Provinces);
    const foundProvinces = Provinces.find((item) => item.kota === Provinces);

    if (status === "kasus" ) {
        Provinces [index] = {
            ...foundProvinces,
            kasus: parseInt(foundProvinces.kusus) + perseInt(jumlah),
        };
    }
    else if (status === "sembuh") {
        Provinces[index] = {
            ...foundProvinces,
            sembuh: parseInt(foundProvinces.sembuh) + parseInt(jumlah),
        };
    }
    else if (status === "meninggal") {
        Provinces[index] ={
            ...foundProvinces,
            meninggal: parseInt(foundProvinces.meninggal) + parseInt(jumlah),
        };
    }
    else if (status === "dirawat") {
        Provinces[index] = {
            ...foundProvinces,
            dirawat: parseInt(foundProvinces.dirawat) + parseInt(jumlah,)
        }
    }

    setProvinces([...Provinces]);

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                    className={styles.form__image}
                    src=""
                    alt="placeholder"
                    />
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__title}>Add Covid</h1>
                    
                </div>
            </section>
        </div>
    )
}

export default covidForm;