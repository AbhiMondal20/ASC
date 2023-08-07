//  $(document).ready(function(e) {
//            $('body').customPlugin({
//                siteMap: true,
//                accessKeyValue: true,
//                scroller: true,
//                mobileMenu: true,
//                mobileWidth: true,
//                skipFunction: true,
//                iframekey: 'c-MTI5NDM2OA',
//                pageName: '-pagename',
//                linkNames: ['viewprofile', 'readmore', 'readmore...', 'patientinfo', 'profile', 'research', 'knowmore', 'readall', 'viewmore', 'viewall'],
//                country_code: ['+1'],
//                phone_numbers: ['713.425.8190'],
//                phone_info: ['Telephone Number of ', 'Telephone Number of '],
//                accessibility: true,
//                removeElements: ('#BannerInner,#Banner'),
//                removeId: ('#flexisel1,#flexisel2,#Slider2'),
//                removeChildClass: ('.accordion'),
//                fontResize: true,
//                menuClass: '.menu',
//                menuScreenWidth: 640,
//                fontResizeList: ('.mainWrapper p,.mainWrapper a,.mainWrapper li,.mainWrapper span')
//            });
//        });
$(document).ready(function(e) {
    $('body').ypoPlugin({
		fontFamily: [],
		copyRight: 'YPO Copyrights Reserved',
		multiMedia: 'xxxxxxx',
		scroller: true,
		menuWidth: true,
		mobileMenu: false,
		slideMenu: true,
		slideType: 'left',
		siteMap: true,
		countryCode: ['+1'],
		show_countryCode: false,
		phoneNumbers: ["713.425.8100"],
		phoneInfos: ["Telephone Number of Houston MRI"],
		phoneLinks: ["tel:+17134258100"],
		responseHeight: true,
		responseHeight_upto: 200,
		responseList: ["#Banner"],
		swapBanner: false,
		swapBanner_after: 480,
		leftSidebar: false,
		leftSidebar_upto: 700,
		accordion: false,
		tabAccord: false,
		tabAccord_upto:640,
		stickyHeader: false,
		stickyHieght: 120,
		onView: false,
		onViewList: (''),
		parallaxEffect: false,
		parallaxList: (''),
		ariaLabel: [],
		gdpr: false,
		accessibility: true,
		fontResize: true,
		fontResizeList: ('.mainWrapper p,.mainWrapper a,.mainWrapper li,.mainWrapper span'),
		removeElements: ('#Banner,#Banner-Container-S,#Map-Container,#Banner,#BannerInner'),
		removeId: ('#Slider1, #flexisel1, #Slider3'),
		removeClass: ('rslides')
	});
});





      