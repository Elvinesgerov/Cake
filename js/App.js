// =========================================== Variables ==============================
let snow = document.querySelector('#snow');
let darkMood = document.querySelector('.darkmood');
let headerContainer = document.querySelector('.header_container');
let sectionContainer = document.querySelector('.section_container');
let body = document.querySelector('body');
let sweetContainer = document.querySelector('.sweet_container h1');
let sweetMain = document.querySelectorAll('.sweet_main div');
let guestContainerOut = document.querySelector('.guest_container_out h1');
let guestContainerOutP = document.querySelector('.guest_container_out p');
let footer = document.querySelector('footer');
let zeroContainerImg = document.querySelector('.zero_container img');
let sweet_mainButton = document.querySelectorAll(".sweet_main div button");
let toast = document.querySelector(".toast");
let closeIcon = document.querySelector("#remixicon");
let progress = document.querySelector(".progress");
let flag = true;
let snowNumber = 150;
let index = 0;
let array = ['../image/Foto2.jpg', '../image/Foto7.jpg', '../image/header.jpg', '../image/Strawberry.jpg', '../image/Chiristmas.jpg'];
// =========================================== Variables ==============================


// =========================================== Notification JS ========================
sweet_mainButton.forEach(item => {
    item.addEventListener("click", () => {
        toast.classList.add("active");
        progress.classList.add("active");

        setTimeout(() => {
            toast.classList.remove("active")
        }, 5000);
    });
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active")
    }, 5300);
});
// =========================================== Notification JS ========================


// =========================================== Change Img =============================
setInterval(function () {
    zeroContainerImg.src = array[index];
    index = (index + 1) % array.length;
}, 1500);
// =========================================== Change Img =============================


// =========================================== Snow JS ================================
function createSnow() {
    let div = document.createElement('div');
    div.classList.add('snow');
    div.innerHTML = '❆';
    div.style.left = `${Math.random() * 90}vw`;
    div.style.animationDuration = `${70}s`;
    div.style.fontSize = `${1.4}em`;
    div.style.color = "red";
    snow.appendChild(div);
    div.addEventListener('animationend', () => {
        div.remove();
        createSnow();
    });
};

for (let i = 0; i < snowNumber; i++) {
    setTimeout(createSnow, i * 200);
};
// =========================================== Snow JS ================================


// =========================================== DarkMood JS ============================
darkMood.addEventListener('click', () => {
    if (flag == true) {
        darkMood.style.backgroundColor = "black";
        darkMood.style.color = "white";
        darkMood.style.boxShadow = "10px 5px 5px brown";
        headerContainer.style.backgroundColor = "black";
        sectionContainer.style.backgroundColor = "rgb(35, 35, 35)";
        sectionContainer.style.color = "white";
        body.style.backgroundColor = "rgb(35, 35, 35)";
        sweetContainer.style.color = "white";
        sweetMain.forEach(item => {
            item.style.color = 'white';
        });
        guestContainerOut.style.color = "white";
        guestContainerOutP.style.color = "white";
        footer.style.backgroundColor = "rgb(38, 38, 38)";
        flag = false;
    } else if (flag == false) {
        darkMood.style.backgroundColor = "white";
        darkMood.style.color = "black";
        darkMood.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
        headerContainer.style.backgroundColor = "#540d0d";
        sectionContainer.style.backgroundColor = "rgb(243, 234, 223)";
        sectionContainer.style.color = "rgb(235, 152, 35)";
        body.style.backgroundColor = "white";
        sweetContainer.style.color = "black";
        sweetMain.forEach(item => {
            item.style.color = 'black';
        })
        guestContainerOut.style.color = "black";
        guestContainerOutP.style.color = "black";
        footer.style.backgroundColor = "black";
        flag = true;
    };
});
// =========================================== DarkMood JS ============================


// =========================================== Scroll JS ==============================
window.onscroll = function () {
    let goToTopButton = document.querySelector('#goToTopButton');

    if (window.scrollY > 1000) {
        goToTopButton.style.display = 'flex';
    } else {
        goToTopButton.style.display = 'none';
    }
};

function goToTop() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - 30);
        setTimeout(goToTop, 10);
    }
};
// =========================================== Scroll JS ==============================


// =========================================== Basket JS ==============================
if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]));
}

let mehsul = [
    {
        id: 1,
        name: "Chocolate cake",
        prize: 60,
    },
    {
        id: 2,
        name: "Fruit cake",
        prize: 70,
    },
    {
        id: 3,
        name: "Strawberry cake",
        prize: 50,
    },

    {
        id: 4,
        name: "Winter cake",
        prize: 80,
    },

    {
        id: 5,
        name: "Birthday cake (1)",
        prize: 60,
    },
    {
        id: 6,
        name: "Birthday cake (2)",
        prize: 70,
    },
    {
        id: 7,
        name: "Birthday cake (3)",
        prize: 50,
    },

    {
        id: 8,
        name: "Fruit cake(1)",
        prize: 49,
    },

    {
        id: 9,
        name: "Fruit cake(2)",
        prize: 65,
    },

    {
        id: 10,
        name: "Fruit cake(3)",
        prize: 50,
    },

    {
        id: 11,
        name: "Chocolate cake(1)",
        prize: 60,
    },

    {
        id: 12,
        name: "Chocolate cake(2)",
        prize: 70,
    },

    {
        id: 13,
        name: "Chocolate cake(3)",
        prize: 70,
    },

    {
        id: 14,
        name: "Cristmas  cake(1)",
        prize: 59,
    },

    {
        id: 15,
        name: "Cristmas  cake(2)",
        prize: 65,
    },

    {
        id: 16,
        name: "Cristmas  cake(3)",
        prize: 60,
    },
];

sweet_mainButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        const id = parseInt(button.getAttribute("data-id"));
        const product = mehsul.find((item) => item.id == id);
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket.find(b => b.id == product.id)) {
            basket.push(product);
        };
        localStorage.setItem("basket", JSON.stringify(basket));
    });
});
// =========================================== Basket JS ==============================


// =========================================== Change Language ========================
i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        resources: {
            az: {
                translation: {
                    headerHome: "Ana səhifə",
                    headerAbout: "Haqqinda",
                    headerVacancies: "Vakansiya",
                    headerContact: "Əlaqə",
                    headerChange: "Dili Dəyişdirin",
                    sections: "Bölmələr",
                    Birthday: "Ad günü",
                    Fruit: "Meyvə",
                    Chocolate: "Şokolad",
                    Chrismas: "Milad",
                    Sweet: "Şirin yeyək, şirin danişaq",
                    Pasta1: "Şokolad Tort",
                    buttons: "Səbətə əlavə",
                    Pasta2: "Meyvə Tortu",
                    Pasta3: "Çiyələk Tortu",
                    Pasta4: "Qiş Tortu",
                    Pasta5: "Ad günü tortu (1)",
                    Pasta6: "Ad günü tortu (2)",
                    Pasta7: "Ad günü tortu (3)",
                    Pasta8: "Meyvə Tortu (1)",
                    Pasta9: "Meyvə Tortu (2)",
                    Pasta10: "Meyvə Tortu (3)",
                    Pasta11: "Şokolad tortu (1)",
                    Pasta12: "Şokolad tortu (2)",
                    Pasta13: "Şokolad tortu (3)",
                    Pasta14: "Milad tortu (1)",
                    Pasta15: "Milad tortu (2)",
                    Pasta16: "Milad tortu (3)",
                    Our: "Qonağimiz olun",
                    OurText: "Cake Shop füsunkar vitrinimizdə şirin dişinizə ev sahibliyi etməkdən məmnundur. Bir yemək yeyin, oturun və təklif etdiyimiz hər şeydən həzz alin. Ləzzətli bişmiş məmulatlarimizdan tutmuş gurmelərdən ilhamlanmiş hədiyyələrimizə qədər, biz bişirilmiş hər şeyə olan acliğinizi təmin etməkdən qürur duyuruq.",
                    View: "Hamisi",
                    footerContact: "Əlaqə",
                    footerAbout: "Haqqinda",
                    footerVacancies: "Vakansiya",
                    footerHome: "Ana səhifə",
                    Nizami: "Nizami: +994 55 551 60 01",
                    Merdakan: "Mərdəkan: +994 55 551 60 02",
                    Yasamal: "Yasamal: +994 55 551 60 03",
                    Bakixanov: "Bakixanov: +994 55 551 60 04",
                    BirthdayHeader: "Ad günü tortu",
                    FruitHeader: "Meyvə Tortu",
                    ChocolateHeader: "Şokolad Tortu",
                    CristmasHeader: "Milad Tortu",
                    MoreThan: "Yalniz tortlardan daha çox",
                    SuccessText: "Səbətə Əlave Olundu",
                    Success: "Ugurlu!",
                }
            },
            en: {
                translation: {
                    headerHome: "Home",
                    headerAbout: "About",
                    headerVacancies: "Vacancies",
                    headerContact: "Contact",
                    headerChange: "Change Language",
                    sections: "Sections",
                    Birthday: "Birthday",
                    Fruit: "Fruit",
                    Chocolate: "Chocolate",
                    Chrismas: "Chrismas",
                    Sweet: "Let's eat sweet, let's talk sweet",
                    Pasta1: "Chocolate cake",
                    buttons: "Add basket",
                    Pasta2: "Fruit cake",
                    Pasta3: "Strawberry cake",
                    Pasta4: "Winter cake",
                    Pasta5: "Birthday cake (1)",
                    Pasta6: "Birthday cake (2)",
                    Pasta7: "Birthday cake (3)",
                    Pasta8: "Fruit Cake (1)",
                    Pasta9: "Fruit Cake (2)",
                    Pasta10: "Fruit Cake (3)",
                    Pasta11: "Chocolate cake (1)",
                    Pasta12: "Chocolate cake (2)",
                    Pasta13: "Chocolate cake (3)",
                    Pasta14: "Cristmas Cake (1)",
                    Pasta15: "Cristmas Cake (2)",
                    Pasta16: "Cristmas Cake (3)",
                    Our: "Be Our Guest",
                    OurText: "The Cake Shop is glad to play host to your sweet tooth in our charming storefront. Grab a bite, take a seat, and enjoy all we have to offer. From our delectable baked goods to our wide array of gourmet-inspired gifts, we pride ourselves in satisfying your hunger for all things baked.",
                    View: "View All",
                    footerContact: "Contact",
                    footerAbout: "About",
                    footerVacancies: "Vacancies",
                    footerHome: "Home",
                    Nizami: "Nizami: +994 55 551 60 01",
                    Merdakan: "Mərdəkan: +994 55 551 60 02",
                    Yasamal: "Yasamal: +994 55 551 60 03",
                    Bakixanov: "Bakixanov: +994 55 551 60 04",
                    BirthdayHeader: "Birthday Cake",
                    FruitHeader: "Fruit Cake",
                    ChocolateHeader: "Chocolate Cake",
                    CristmasHeader: "Cristmas Cake",
                    MoreThan: "More than just cakes",
                    SuccessText: "Added to cart",
                    Success: "Success!",
                }
            }
        },
        fallbackLng: 'en',
        debug: true,

    }, function (err, t) {
        updateContent();
        document.querySelector('.change').addEventListener('click', function () {
            i18next.changeLanguage(i18next.language === 'az' ? 'en' : 'az', updateContent);
        });
    });

function updateContent() {
    document.querySelector('[data-i18n="headerHome"]').textContent = i18next.t('headerHome');
    document.querySelector('[data-i18n="headerAbout"]').textContent = i18next.t('headerAbout');
    document.querySelector('[data-i18n="headerVacancies"]').textContent = i18next.t('headerVacancies');
    document.querySelector('[data-i18n="headerContact"]').textContent = i18next.t('headerContact');
    document.querySelector('[data-i18n="headerChange"]').textContent = i18next.t('headerChange');
    document.querySelector('[data-i18n="sections"]').textContent = i18next.t('sections');
    document.querySelector('[data-i18n="Birthday"]').textContent = i18next.t('Birthday');
    document.querySelector('[data-i18n="Fruit"]').textContent = i18next.t('Fruit');
    document.querySelector('[data-i18n="Chocolate"]').textContent = i18next.t('Chocolate');
    document.querySelector('[data-i18n="Chrismas"]').textContent = i18next.t('Chrismas');
    document.querySelector('[data-i18n="Sweet"]').textContent = i18next.t('Sweet');
    document.querySelector('[data-i18n="Pasta1"]').textContent = i18next.t('Pasta1');
    document.querySelector('[data-i18n="Pasta2"]').textContent = i18next.t('Pasta2');
    document.querySelector('[data-i18n="Pasta3"]').textContent = i18next.t('Pasta3');
    document.querySelector('[data-i18n="Pasta4"]').textContent = i18next.t('Pasta4');
    document.querySelector('[data-i18n="Pasta5"]').textContent = i18next.t('Pasta5');
    document.querySelector('[data-i18n="Pasta6"]').textContent = i18next.t('Pasta6');
    document.querySelector('[data-i18n="Pasta7"]').textContent = i18next.t('Pasta7');
    document.querySelector('[data-i18n="Pasta8"]').textContent = i18next.t('Pasta8');
    document.querySelector('[data-i18n="Pasta9"]').textContent = i18next.t('Pasta9');
    document.querySelector('[data-i18n="Pasta10"]').textContent = i18next.t('Pasta10');
    document.querySelector('[data-i18n="Pasta11"]').textContent = i18next.t('Pasta11');
    document.querySelector('[data-i18n="Pasta12"]').textContent = i18next.t('Pasta12');
    document.querySelector('[data-i18n="Pasta13"]').textContent = i18next.t('Pasta13');
    document.querySelector('[data-i18n="Pasta14"]').textContent = i18next.t('Pasta14');
    document.querySelector('[data-i18n="Pasta15"]').textContent = i18next.t('Pasta15');
    document.querySelector('[data-i18n="Pasta16"]').textContent = i18next.t('Pasta16');
    document.querySelectorAll('[data-i18n="buttons"]').forEach(item => {
        item.textContent = i18next.t('buttons')
    })
    document.querySelector('[data-i18n="Our"]').textContent = i18next.t('Our');
    document.querySelector('[data-i18n="OurText"]').textContent = i18next.t('OurText');
    document.querySelector('[data-i18n="View"]').textContent = i18next.t('View');
    document.querySelector('[data-i18n="footerContact"]').textContent = i18next.t('footerContact');
    document.querySelector('[data-i18n="footerAbout"]').textContent = i18next.t('footerAbout');
    document.querySelector('[data-i18n="footerVacancies"]').textContent = i18next.t('footerVacancies');
    document.querySelector('[data-i18n="footerHome"]').textContent = i18next.t('footerHome');
    document.querySelector('[data-i18n="Nizami"]').textContent = i18next.t('Nizami');
    document.querySelector('[data-i18n="Merdakan"]').textContent = i18next.t('Merdakan');
    document.querySelector('[data-i18n="Yasamal"]').textContent = i18next.t('Yasamal');
    document.querySelector('[data-i18n="Bakixanov"]').textContent = i18next.t('Bakixanov');
    document.querySelector('[data-i18n="BirthdayHeader"]').textContent = i18next.t('BirthdayHeader');
    document.querySelector('[data-i18n="FruitHeader"]').textContent = i18next.t('FruitHeader');
    document.querySelector('[data-i18n="ChocolateHeader"]').textContent = i18next.t('ChocolateHeader');
    document.querySelector('[data-i18n="CristmasHeader"]').textContent = i18next.t('CristmasHeader');
    document.querySelector('[data-i18n="MoreThan"]').textContent = i18next.t('MoreThan');
    document.querySelector('[data-i18n="SuccessText"]').textContent = i18next.t('SuccessText');
    document.querySelector('[data-i18n="Success"]').textContent = i18next.t('Success');
};
// =========================================== Change Language ========================