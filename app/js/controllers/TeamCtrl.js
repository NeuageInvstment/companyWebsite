angular.module('nuageInvestment').controller('TeamCtrl', ['$rootScope', '$scope', '$state', 'EmployeeModel',
    function($rootScope, $scope, $state, Employee) {
        'use strict';

        var employeesEn =  [
            new Employee({
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
                fullName : 'Summer Xia',
                title : 'Senior Advisor',
                email : 'sxia@nuageinvrealty.com',
                phoneNumber : '1(617)319-3601',
                location : 'Boston',
                profileImageURI : './images/employees/sxia.jpg',
                language : 'English, Chinese(Mandarin)',
                wechatId: 'summeronetree',
                certificate: null
            }),
            new Employee({
                fullName: 'Wilber Chen',
                title: 'Senior Advisor',
                email: 'wchen@nuageinvrealty.com',
                phoneNumber: '1(857)334-1635',
                location: 'Boston',
                profileImageURI: './images/employees/wchen.jpg',
                language: 'English, Chinese (Mandarin/Taiwanese)',
                wechatId:'wilburchenus',
                certificate: null
            }),
            new Employee({
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
                fullName: 'Hannah Quan',
                title:'Advisor',
                email: 'hannah.hao.quan@gmail.com',
                phoneNumber: '1(617)901-9160',
                location: 'Boston',
                profileImageURI: './images/employees/hquan.png',
                language: 'English, Chinese (Mandarin)',
                wechatId:'Hannah_Quan',
                certificate: null
            }),
            new Employee({
                fullName: 'Amelie Cheng',
                title:'Advisor',
                email: 'y.cheng0907@gmail.com',
                phoneNumber: '1(917)345-9488',
                location: 'Boston',
                profileImageURI: './images/employees/acheng.jpg',
                language: 'English, Chinese (Mandarin)',
                certificate: null
            }),
            new Employee({
                fullName: 'Chen Chen',
                title:'Advisor',
                email: 'nick6636@gmail.com',
                phoneNumber: '1(978)654-1109',
                location: 'Boston',
                profileImageURI: './images/employees/cchen.jpg',
                language: 'English, Chinese (Mandarin)',
                certificate: null
            }),
            new Employee({
                fullName: 'Kino Song',
                title:'Principal',
                email: 'ksong@nuageinvrealty.com',
                phoneNumber: '1(917)972-1668',
                location: 'New York',
                profileImageURI: './images/employees/ksong.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'youriva',
                certificate: null
            }),
            new Employee({
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

        var employeesCN =  [
            new Employee({
                fullName : 'Christie Xie',
                title : '公司创办人',
                email : 'cxie@nuageinvrealty.com',
                phoneNumber : '1(617)678-3889',
                location : 'Boston',
                profileImageURI : './images/employees/cxie.jpg',
                language : '英文, 普通话',
                certificate: '注册理财规划师',
                wechatId: 'Christie_Xie'
            }),
            new Employee({
                fullName : 'Bin Shen',
                title : '高级顾问',
                email : 'bshen@nuageinvrealty.com',
                phoneNumber : '1(617)817-1782',
                location : 'Boston',
                profileImageURI : './images/employees/bshen.jpg',
                language : '英文, 普通话',
                certificate: null,
                wechateId: 'isen2006'
            }),
            new Employee({
                fullName: 'Jing Mai',
                title:'高级顾问',
                email: 'jmai@nuageinvrealty.com',
                phoneNumber: '1(207)458-9749',
                location: 'Boston',
                profileImageURI: './images/employees/jmai.jpg',
                language: '英文, 粤语',
                wechatId:'jingrmai',
                certificate: '注册会计师'
            }),
            new Employee({
                fullName : 'Summer Xia',
                title : '高级顾问',
                email : 'sxia@nuageinvrealty.com',
                phoneNumber : '1(617)319-3601',
                location : 'Boston',
                profileImageURI : './images/employees/sxia.jpg',
                language : '英文, 普通话',
                wechatId: 'summeronetree',
                certificate: null
            }),
            new Employee({
                fullName: 'Wilber Chen',
                title: '高级顾问',
                email: 'wchen@nuageinvrealty.com',
                phoneNumber: '1(857)334-1635',
                location: 'Boston',
                profileImageURI: './images/employees/wchen.jpg',
                language: '英文, 普通话, 台语',
                wechatId:'wilburchenus',
                certificate: null
            }),
            new Employee({
                fullName: 'Vanessa Truong',
                title: '顾问',
                email: 'vtruong@nuageinvrealty.com',
                phoneNumber: '1(508)654-0789',
                location: 'Boston',
                profileImageURI: './images/employees/vtruong.jpg',
                certificate: '注册理财规划师',
                language: '英文, 普通话, 粤语, 越南话',
                wechatId: null
            }),
            new Employee({
                fullName: 'Kim Walker',
                title:'顾问',
                email: 'kwalker@nuageinvrealty.com',
                phoneNumber: '1(617)680-2733',
                location: 'Boston',
                profileImageURI: './images/employees/kwalker.jpg',
                language: '英文',
                wechatId: null,
                certificate: null
            }),
            new Employee({
                fullName: 'Emily Ji',
                title:'顾问',
                email: 'xiaocen0731@gmail.com',
                phoneNumber: '1(517)488-6368',
                location: 'Boston',
                profileImageURI: './images/employees/eji.jpg',
                language: '英文, 普通话',
                wechatId:'xiaocen0731',
                certificate: null
            }),
            new Employee({
                fullName: 'Ran Cui',
                title:'顾问',
                email: 'rancdo@gmail.com',
                phoneNumber: '1(508)308-8280',
                location: 'Boston',
                profileImageURI: './images/employees/rcui.jpg',
                language: '英文, 普通话',
                wechatId:'Ran_C_0208'
            }),
            new Employee({
                fullName: 'Hannah Quan',
                title:'顾问',
                email: 'hannah.hao.quan@gmail.com',
                phoneNumber: '1(617)901-9160',
                location: 'Boston',
                profileImageURI: './images/employees/hquan.png',
                language: '英文, 普通话',
                wechatId:'Hannah_Quan',
                certificate: null
            }),
            new Employee({
                fullName: 'Amelie Cheng',
                title:'顾问',
                email: 'y.cheng0907@gmail.com',
                phoneNumber: '1(917)345-9488',
                location: 'Boston',
                profileImageURI: './images/employees/acheng.jpg',
                language: '英文, 普通话',
                certificate: null
            }),
            new Employee({
                fullName: 'Chen Chen',
                title:'顾问',
                email: 'nick6636@gmail.com',
                phoneNumber: '1(978)654-1109',
                location: 'Boston',
                profileImageURI: './images/employees/cchen.jpg',
                language: '英文, 普通话',
                certificate: null
            }),
            new Employee({
                fullName: 'Kino Song',
                title:'公司创办人',
                email: 'ksong@nuageinvrealty.com',
                phoneNumber: '1(917)972-1668',
                location: 'New York',
                profileImageURI: './images/employees/ksong.jpg',
                language: '英文, 普通话',
                wechatId:'youriva',
                certificate: null
            }),
            new Employee({
                fullName: 'Jeff Zhou',
                title:'顾问',
                email: 'jeff.zhou@acertallc.com',
                phoneNumber: '1(860)532-9018',
                location: 'Connecticut',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'rzredge',
                certificate: null
            }),
            new Employee({
                fullName: 'Joey Jiang',
                title:'顾问代表(上海)',
                email: 'jiangchao1103@hotmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'CJiang1103',
                certificate: null
            }),
            new Employee({
                fullName: 'Letian Xia',
                title:'顾问代表(上海)',
                email: 'letianx@foxmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'letianxia1',
                certificate: null
            }),
            new Employee({
                fullName: 'Chun-Kai Wang',
                title:'顾问代表(山东)',
                email: 'phenomenoner@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话, 台语',
                wechatId:'chunkai1983',
                certificate: null
            }),
            new Employee({
                fullName: 'Pibin Teng',
                title:'顾问代表(山东)',
                email: 'pibinteng@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'teng8809',
                certificate: null
            })
        ];

        var getEmployeeCollectionByLocation = function(location, language) {
            var employeesByLocation = [];
            var employees = [];
            if(language === 'en_US') {
                employees = employeesEn;
            } else if (language === 'cn-simplified') {
                employees = employeesCN;
            }
            for(var i = 0; i < employees.length; i++) {
                if(employees[i].location === location) {
                    employeesByLocation.push(employees[i]);
                }
            }
            return employeesByLocation;
        };

        var getEmployees = function() {
            $scope.bostonEmployees = getEmployeeCollectionByLocation('Boston', $rootScope.selectLanguage);
            $scope.newYorkEmployees = getEmployeeCollectionByLocation('New York', $rootScope.selectLanguage);
        };

        getEmployees();

        $scope.$watch('selectLanguage', function(newValue, oldValue){
            if(newValue !== oldValue) {
                getEmployees();
            }
        });

    }]);
