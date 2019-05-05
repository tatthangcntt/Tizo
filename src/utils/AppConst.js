import { moderateScale, verticalScale, scale } from "./Scale";
import { StyleSheet} from 'react-native';
export var AppConst = {
    TabName: {
        HomeScreen: 'HomeScreen',
        SearchScreen: 'SearchScreen',
        AccountScreen: 'AccountScreen',
        UploadScreen: 'UploadScreen',
        SettingScreen: 'SettingScreen',
        FavourisScreen:'FavourisScreen',
        HistoryScreen:'HistoryScreen',
    },
    RmsKey: {
        KEY_LUU_DU_LIEU_KHACH_HANG: 'rmsKeyLuuDuLieuKhachHang',
        KEY_LUU_KIEU_NGON_NGU: 'rmsKeyLuwKieuNgonNgu',
        TRANG_THAI_DANG_NHAP: 'rmsKeyTrangThaiDangNhap',
        KEY_LUU_DU_LIEU_CHI_TIET_SU_KIEN: 'rmsKeyLuuDuLieuChiTietSuKien',
        KEY_LUU_SO_MILLISECOND_CHENH_LECH_SERVER_CLIENT: 'rmsKeyLuuSoMillisecondChenhLechServerClient',
        KEY_LUU_DU_LIEU_DANH_SACH_AGENDA: 'rmsKeyLuuDuLieuDanhSachAgenda',
        TRANG_THAI_DANG_KY_MAIL: 'rmsKeyTrangThaiDangKy',
        KEY_LUU_GIO_HANG: 'rmsKeyLuuGioHang',
        CHECK_CODE: 'rmsKeyCheckCode',
        CHECK_FIRST_USE_APP: 'rmsKeyCheckFirstUseApp',

    },
    config: {
        TIMEOUT_MOT_REQUEST: 1,
        SO_LUONG_FOLLOW_MOT_REQUEST: 0,
    },
    TagAction:
        {
            TAG_UPDATE_DATA:"tagUpdateDATA",
            TAG_UPDATE_COUNT_DOWN:"tagUpdateCountDown"
        },
    ActivityType: {
        AutomotiveNavigation: 'AutomotiveNavigation',
        OtherNavigation: "OtherNavigation",
        Fitness: 'Fitness',
        Other: 'Other'
    },
    TagRequest:
        {
            TAG_LOGIN: 'requestLogin',
            TAG_LOGIN_FB: 'requestLoginFb',
            TAG_LOGIN_GG: 'requestLoginGg',
            TAG_SIGNUP: 'requestSignup',
            TAG_PASSCODE: 'requestPassCode',
            TAG_HISTORY: 'requestHistory',
            TAG_LISTORDER: 'requestListOrder',
            TAG_LIST_TEE_TIME: 'requestListTeeTime',
            TAG_BOOK_TIME_OUT: 'requestBookTimeOut',
            TAG_CHI_TIET_SAN: 'requestChiTietSan',
            TAG_LAY_DANH_SACH_CADDY: 'requestLayDanhSachCaddy',
            TAG_LAY_DANH_SACH_DICH_VU: 'requestListService',
            TAG_LAY_THOI_TIET_HIEN_TAI: 'requestWeatherCurrent',
            TAG_LAY_THOI_TIET_TUAN: 'requestWeatherWeek',
            TAG_LAY_THOI_TIET_TIME: 'requestWeatherTime',
            TAG_CAP_NHAT_THONG_TIN_HANDICAP: 'requestUpdateThongTinHandicap',
            TAG_FORGET_PASSWORD_STEP_1: 'requestQuenMKStep1',
            TAG_FORGET_PASSWORD_STEP_1_RECENT: 'requestQuenMKStep1Recent',
            TAG_FORGET_PASSWORD_STEP_2: 'requestQuenMKStep2',
            TAG_REQUEST_LIST_BILL: 'requestListBill',
            TAG_DAT_SAN: 'requestPaymentTeeTimes',
            TAG_BOOK_TEE_TIME: 'requestBookTeeTime',
            TAG_SELECT_CADDY_BOOK_TEE_TIME: 'requestSelectCaddyInBookTeeTime',
            TAG_REQUEST_EVENT_STADIUM: 'requestEventStadium',
            TAG_CARE_CADDY: 'requestCareCaddy',
            TAG_INFO_HANDICAP: 'requestInfoHandicap',
            TAG_LIST_HOLES: 'requestListHoles',
            TAG_LIST_DETAIL_HOLES: 'requestListDetailHoles',
            TAG_REQUEST_NOTI_STADIUM: 'requestNotiStadium',
            TAG_REQUEST_LIST_BOOK: 'requestLichSuDatSan',
            TAG_CANCLE_TEE_TIME: 'requestCancleTeeTime',
            TAG_BOOK_CADDY: 'requestBookCaddy',
            TAG_CANCLE_CADDY_BOOK_TEE_TIME: 'requestCancleCaddyInBookTeeTime',
            TAG_VIEW_PAYMENT: 'requestViewPayment',
            TAG_LIST_STADIUM: 'requestListStadium',
            TAG_STAY_PLAY: 'requestStayPlay',
            TAG_BOOK_STAY_PLAY: 'requestBookStayPlay',
            TAG_UPLOAD_LIVE_SCORE: 'requestListContest',
            TAG_LIST_PLAYER_CONTEST: 'requestListPlayerContest',
            TAG_SCORE_CARD: 'requestSendScoreCard',
            TAG_SHOW_POPUP: 'requestShowPopup',
            TAG_HOT_LINES: 'requestHotLines',
            TAG_CHECK_VERSION: 'requestCheckVersion',
            TAG_TUTORIAL: 'requestTutorial',
            TAG_RESET_TEE: 'requestResetTee',
            TAG_UPDATE_PROFILE: 'requestUpdateProfile'
        },
    keyLib:
        {
            GOOGLE_PLACE_API_KEY: 'AIzaSyDlPyk_qNENLGzewPnaLUM2cPi6Q8xujPI',
            WEATHER_KEY: '34914777f13ad94634e0f67aebfe3e15'
        },
    Screen: {
        WELCOME_SCREEN: 'screen.welcome',
        LOGIN_SCREEN: 'screen.Login',
        SLECTION_SCREEN: 'screen.Selection',
        REGIST_SCREEN: 'screen.Regist',
        FORGET_PASSWORD_SCREEN: 'screen.Forget_pass',
        VETIFY_FORGET_PASSWORD_SCREEN: 'screen.Verify_Forget_pass',
        HISTORY_TRANS_SCREEN: 'screen.History',
        LIST_TRANS_SCREEN: 'screen.List_trans',
        SETTING_SCREEN: 'screen.Setting',
        ACCOUNT_SCREEN: 'screen.Acount',
        TRANSPORT_TAB_SCREEN: 'screen.Transport_tab',
        TRANSPORTING_TAB_SCREEN: 'screen.Transporting_tab',
        HISTORY_TAB_SCREEN: 'screen.History_tab',
        DETAIL_ORDER_SCREEN: 'screen.Detail_order',
        DETAIL_ORDERING_SCREEN: 'screen.Detail_ordering',
        TRACKING_ORDER_SCREEN: 'screen.Tracking_order',
        TRACKING_SHOP_SCREEN: 'screen.Tracking_shop',
        TRANSPORT_SCREEN: 'screen.Transport_screen'
    },
    ColorApp: {
        mainColor: '#ff000d',
        mainColorRgba: 'rgba(255, 0, 13, 0.3)',
        headerNav: '#224596',
        background: '#F5F6F7',
        cardBackground: '#FFFFFF',
        listItemBackground: '#FFFFFF',
        title: '#EDEDED',
        grey: '#e7e6e6',
        bgInput: '#D5D4D4',
        backgroundnav: '#212337',
        backgroundList: "#1C1D37",
        green: '#6cb243',
        darkgrey: '#555555',
        gold: '#ffb600',
        silver: '#a7a9ac',
        bronze: '#c4885b',
        blue: "#1e6bb4",
        yellow: "#fdd500",
        star: '#F8F533',
        transparent: 'transparent',
        placeholder: "#8C8C8C",
        white: "#fff"
    },
    FontApp:
    {
        fontSizeText: moderateScale(14,0.4),
        fontSizeButton: moderateScale(16,0.4),
    },
    InfoStadium: {
        key:"KIM-BANG-GOLF",
        idStadium: "53", // do  hệ thống sân chỉ có 1 sân duy nhất nên đang fix cưng id = 53
        nameStadium: "Golf Kim Bang", // fix tên sân kim bảng
        imageStadium: "",
        latStadium: 20.5384174,
        lngStadium: 105.8119225,
        keySocket: "KIM_BANG" // key socket sua theo ung app de check key server socket tra ve
    }
}
 //export {AppConst}
 export var SESSION_ID = undefined;
 export var USER_ID = 0;
 export var USER_NAME = "";
 export var CURRENT_SCREEN = undefined;
 export var ACCOUNT_LEVEL = undefined;
