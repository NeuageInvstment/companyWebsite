angular.module('nuageInvestment').factory('EmployeeDataService', ['$q', 'EmployeeModel',
    function($q, Employee) {
        'use strict';

        var employees =  [
            new Employee({
                id: 1,
                fullName : 'Christie Xie',
                title : 'Managing Principal',
                email : 'cxie@nuageinvrealty.com',
                phoneNumber : '1(617)678-3889',
                location : 'Boston',
                profileImageURI : './images/employees/cxie.jpg',
                language : 'English, Chinese (Mandarin)',
                certificate: 'CFP',
                wechatId: 'Christie_Xie'
            }),
            new Employee({
                id: 2,
                fullName : 'Bin Shen',
                title : 'Senior Advisor',
                email : 'bshen@nuageinvrealty.com',
                phoneNumber : '1(617)817-1782',
                location : 'Boston',
                profileImageURI : './images/employees/bshen.jpg',
                language : 'English, Chinese (Mandarin)',
                certificate: null,
                wechateId: 'isen2006'
            }),
            new Employee({
                id: 3,
                fullName: 'Jing Mai',
                title:'Senior Advisor',
                email: 'jmai@nuageinvrealty.com',
                phoneNumber: '1(207)458-9749',
                location: 'Boston',
                profileImageURI: './images/employees/jmai.jpg',
                language: 'English, Chinese (Cantonese)',
                wechatId:'jingrmai',
                certificate: 'CPA'
            }),
            new Employee({
                id: 4,
                fullName : 'Summer Xia',
                title : 'Advisor',
                email : 'sxia@nuageinvrealty.com',
                phoneNumber : '1(617)319-3601',
                location : 'Boston',
                profileImageURI : './images/employees/sxia.jpg',
                language : 'English, Chinese(Mandarin)',
                wechatId: 'summeronetree',
                certificate: null
            }),
            new Employee({
                id: 5,
                fullName: 'Wilber Chen',
                title: 'Advisor',
                email: 'wchen@nuageinvrealty.com',
                phoneNumber: '1(857)334-1635',
                location: 'Boston',
                profileImageURI: './images/employees/wchen.jpg',
                language: 'English, Chinese (Mandarin/Taiwanese)',
                wechatId:'wilburchenus',
                certificate: null
            }),
            new Employee({
                id: 6,
                fullName: 'Zhou Chen',
                title:'Advisor',
                email: 'zchen@nuageinvrealty.com',
                phoneNumber: '1(781)521-2635',
                location: 'Boston',
                profileImageURI: './images/employees/zchen.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'cn1960216387',
                certificate: null
            }),
            new Employee({
                id: 7,
                fullName: 'Vanessa Truong',
                title: 'Advisor',
                email: 'vtruong@nuageinvrealty.com',
                phoneNumber: '1(508)654-0789',
                location: 'Boston',
                profileImageURI: './images/employees/vtruong.jpg',
                certificate: 'CFP',
                language: 'English, Chinese (Mandarin/Cantonese), Vietnamese',
                wechatId: null
            }),
            new Employee({
                id: 8,
                fullName: 'Kim Walker',
                title:'Advisor',
                email: 'kwalker@nuageinvrealty.com',
                phoneNumber: '1(617)680-2733',
                location: 'Boston',
                profileImageURI: './images/employees/kwalker.jpg',
                language: 'English',
                wechatId: null,
                certificate: null
            }),
            new Employee({
                id: 9,
                fullName: 'Joe Wang',
                title:'Advisor',
                email: 'junlewang@gmail.com',
                phoneNumber: '1(781)308-0291',
                location: 'Boston',
                profileImageURI: './images/employees/jwang.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'JoeWang606297'
            }),
            new Employee({
                id: 10,
                fullName: 'Emily Ji',
                title:'Advisor',
                email: 'xiaocen0731@gmail.com',
                phoneNumber: '1(517)488-6368',
                location: 'Boston',
                profileImageURI: './images/employees/eji.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'xiaocen0731',
                certificate: null
            }),
            new Employee({
                id: 11,
                fullName: 'Ran Cui',
                title:'Advisor',
                email: 'rancdo@gmail.com',
                phoneNumber: '1(508)308-8280',
                location: 'Boston',
                profileImageURI: './images/employees/rcui.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'Ran_C_0208'
            }),
            new Employee({
                id: 12,
                fullName: 'Hannah Quan',
                title:'Advisor',
                email: 'hannah.hao.quan@gmail.com',
                phoneNumber: '1(617)901-9160',
                location: 'Boston',
                profileImageURI: './images/employees/hquan.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'Hannah_Quan',
                certificate: null
            }),
            new Employee({
                id: 13,
                fullName: 'Qiuyuan Yang',
                title:'Finance Intern',
                email: 'yqy9056@gmail.com',
                phoneNumber: null,
                location: 'Boston',
                profileImageURI: './images/employees/qyang.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'yqy9056',
                certificate: null
            }),

            new Employee({
                id: 14,
                fullName: 'Wenhan Xiao',
                title:'Finance Intern',
                email: 'whxiao84@gmail.com',
                phoneNumber: null,
                location: 'Boston',
                profileImageURI: './images/employees/wxiao.jpg',
                language: 'English, Chinese (Mandarin/Cantonese)',
                wechatId:'DorianShaw',
                certificate: null
            }),
            new Employee({
                id: 15,
                fullName: 'Max Xu',
                title:'Advisor',
                email: 'slowsmile820@gmail.com',
                phoneNumber: '1(617)901-5937',
                location: 'New York',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'maxxu_ny',
                certificate: null
            }),
            new Employee({
                fullName: 'Kate Song',
                title:'Advisor',
                email: 'ksong@nuageinvrealty.com',
                phoneNumber: '1(917)972-1668',
                location: 'New York',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'youriva',
                certificate: null
            }),
            new Employee({
                id: 16,
                fullName: 'Jeff Zhou',
                title:'Advisor',
                email: 'jeff.zhou@acertallc.com',
                phoneNumber: '1(860)532-9018',
                location: 'Connecticut',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'rzredge',
                certificate: null
            }),
            new Employee({
                id: 17,
                fullName: 'Joey Jiang',
                title:'Shanghai Representative',
                email: 'jiangchao1103@hotmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'CJiang1103',
                certificate: null
            }),
            new Employee({
                id: 18,
                fullName: 'Letian Xia',
                title:'Shanghai Representative',
                email: 'letianx@foxmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'letianxia1',
                certificate: null
            }),
            new Employee({
                id: 19,
                fullName: 'Chun-Kai Wang',
                title:'Shandong Representative',
                email: 'phenomenoner@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin/Taiwanese)',
                wechatId:'chunkai1983',
                certificate: null
            }),
            new Employee({
                id: 20,
                fullName: 'Pibin Teng',
                title:'Shandong Representative',
                email: 'pibinteng@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'teng8809',
                certificate: null
            })
        ];

        return {

            getEmployeeCollectionByLocation: function(location) {
                var employeesByLocation = [];
                for(var i = 0; i < employees.length; i++) {
                    if(employees[i].location == location) {
                        employeesByLocation.push(employees[i]);
                    }
                }
                return employeesByLocation;
            },

            getEmployeeById: function(id) {
                for(var i = 0; i < employees.length; i++){
                    if(employees[i].id = id) {
                        return employees[i];
                    }
                }
            }

        };

    }]);
