const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Евгения",
            "id_3": "Елена",
            "id_4": "Марина",
            "id_5": "Мария",
            "id_6": "Наталья",
            "id_7": "Анастасия",
            "id_8": "Ксения",
            "id_9": "Валентина",
            "id_10": "Агата"
        }
    }`,

    middleNameJson: `{
        "count": 12,
        "list": {     
            "id_1": "Александро",
            "id_2": "Евгенье",
            "id_3": "Александро",
            "id_4": "Ивано",
            "id_5": "Михайло",
            "id_6": "Геннадье",
            "id_7": "Андрее",
            "id_8": "Максимо",
            "id_9": "Валентино",
            "id_10": "Дмитрие",
            "id_11": "Сергее",
            "id_12": "Владимиро"
        }

    }`,

    professionJson: `{
        "count": 24,
        "list": {     
            "id_1": "пожарный",
            "id_2": "каменщик",
            "id_3": "слесарь 1 разряда",
            "id_4": "автомеханик",
            "id_5": "электромонтер",
            "id_6": "оператор станков с ЧПУ",
            "id_7": "инженер-бурильщик",
            "id_8": "химик-технолог",
            "id_9": "токарь 2 разряда",
            "id_10": "инженер по качеству продукции",
            "id_11": "военнослужащий",
            "id_12": "пилот",
            "id_13": "педагог",
            "id_14": "стюардесса",
            "id_15": "стилист",
            "id_16": "маркетолог",
            "id_17": "фитнес-тренер",
            "id_18": "массажист",
            "id_19": "косметолог",
            "id_20": "стоматолог",
            "id_21": "дизайнер",
            "id_22": "архитектор",
            "id_23": "специалист по рекламному маркетингу",
            "id_24": "флорист"
        }

    }`,

    dateBirthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'мужской',
    GENDER_FEMALE: 'женский',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json, checkGender = 1, outputMiddleName = 0, outputProfession = 0, monthNumber = 0) { // аргумент check служит для проверки пола (1-мужчина, 0-женщина). Аргумент outputMiddleName служит для генерации отчества отдельно от имени и фамилии (при outputMiddleName = 0 генерируются имя и фамилия, когда outputMiddleName = 1 генерируется отчество)
        //аргумент outputProfession служит для вывода профессии относительно пола (outputProfession = 0 - значение по умолчанию, outputProfession = 1 - мужские профессии, outputProfession = 2 - женские)

        const obj = JSON.parse(json);
        if (monthNumber === 0) {
            const prop = (outputProfession === 0) ? `id_${this.randomIntNumber(obj.count, 1)}` : outputProfession === 1 ? `id_${this.randomIntNumber(12, 1)}` : `id_${this.randomIntNumber(24, 13)}`; // Определение интервала вывода профессий при outputProfession = 1 и outputProfession =2 (от 1 до 12 - мужские, от 13 до 24 - женские)
            if (outputMiddleName === 0)
                return (checkGender === 1) ? obj.list[prop] : obj.list[prop] = obj.list[prop] + "а"; // Проверка и возвращение фамилии соответствующей полу. Имя выводится при checkGender = 1, т.к. имена расположены в разных JSON. Профессия и Месяц рождения  также выводятся при checkGender = 1
            else
                return (this.person.gender === this.GENDER_MALE) ? obj.list[prop] = obj.list[prop] + "вич" : obj.list[prop] = obj.list[prop] + "вна"; // Проверка и возвращение отчества соответствующего полу
        } 
        else {
            const prop = `id_${monthNumber}`;
            return obj.list[prop];
        }
        
    },

    randomGender: function () {

        let genderRandom = this.randomIntNumber(); // Получение рандомного числа и вывод пола (1 - мужчина, 0 - женщина)
        return (genderRandom === 1) ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    randomFirstName: function () {
        return (this.person.gender === this.GENDER_MALE) ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
        // Проверка пола для вывода нужного имени. Аргумент checkGender не указывается, т.к. имена расположены в разных JSON и зависят от пола
    },


    randomSurname: function () {
        return (this.person.gender === this.GENDER_MALE) ? this.randomValue(this.surnameJson, 1) : this.randomValue(this.surnameJson, 0);
        // Проверка пола. Если мужчина, то в randomValue() передается аргумент check = 1 и ничего не меняется, если женщина то в randomValue() передается check = 0 и к фамилии прибавляется буква "а"
    },

    randomMiddleName: function () {
        return this.randomValue(this.middleNameJson, 1, 1)
        //Вызов функции randomValue и передача аргументов. Если последний аргумент outputMiddleName = 1, значит наступила очередь генерации отчества. Изначально последний аргумент = 0. (чтобы не мешало выводу фамилии и имени)
    },

    randomProfession: function () {
        return (this.person.gender === this.GENDER_MALE) ? this.randomValue(this.professionJson, 1, 0, 1) : this.randomValue(this.professionJson, 1, 0, 2)
        //вызов функции randomValue. Если последний аргумент outputProfession = 1, то выводятся мужские профессии, если аргумент outputProfession = 2 - женские 
    },

    randomDateBirth: function () {
        let monthNumber = this.randomIntNumber(12, 1); // Создание переменной и рандомный выбор месяца для вызова функции randomValue ниже (передается в нее как аргумент) и также это поможет в  дальнейшем определении четных и нечетных месяцев
        let monthValue = this.randomValue(this.dateBirthJson, 1, 0, 0, monthNumber); // Вывод выбранного месяца в текстовом варианте
        let dayBirth = (monthNumber === 2) ? this.randomIntNumber(28, 1) : (monthNumber === 4 || monthNumber  === 6 || monthNumber === 9 || monthNumber === 11) ? this.randomIntNumber(30, 1) : this.randomIntNumber(31, 1); // Вывод дня в зависимости от месяца
        let yearBirth = this.randomIntNumber(2000, 1960); // Вывод года рождения
        let outputFullDate = `${dayBirth} ${monthValue} ${yearBirth}`; // Вывод полной даты в формате (день,месяц,год)
        return outputFullDate;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.dateBirth = this.randomDateBirth();
        return this.person;
    }
};

     
