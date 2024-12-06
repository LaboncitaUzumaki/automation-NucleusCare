/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

// Pages

//Admin
type AdminLoginPage = typeof import('./src/pages/web/admin/AdminLoginPage');
type AdminDashboardPage =
    typeof import('./src/pages/web/admin/AdminDashboardPage');
type AdminNavigationBar =
    typeof import('./src/pages/web/admin/AdminNavigationBar');
type AdminAccountsPage =
    typeof import('./src/pages/web/admin/AdminAccountsPage');
type AdminAccountPage = typeof import('./src/pages/web/admin/AdminAccountPage');
type AdminNewUser = typeof import('./src/pages/web/admin/AdminNewUser');
type AdminEditUser = typeof import('./src/pages/web/admin/AdminEditUser');
type AdminClientProfilePage =
    typeof import('./src/pages/web/admin/AdminClientProfilePage.ts');

// Care Control
type CareControlLoginPage =
    typeof import('./src/pages/web/care_control/CareControlLoginPage');
type CareControlCompleteProfilePage =
    typeof import('./src/pages/web/care_control/CareControlCompleteProfilePage');
type ProviderAccountsPage =
    typeof import('./src/pages/web/care_control/provider/ProviderAccountsPage');
type ProviderNavigationBar =
    typeof import('./src/pages/web/care_control/provider/ProviderNavigationBar');
type ProviderSchedulePage =
    typeof import('./src/pages/web/care_control/provider/ProviderSchedulePage');
type ProviderCallPage =
    typeof import('./src/pages/web/care_control/provider/ProviderCallPage');
type ProviderPostCallDataPage =
    typeof import('./src/pages/web/care_control/provider/ProviderPostCallDataPage');
type UserPicturesPage =
    typeof import('./src/pages/web/care_control/user/UserPicturesPage');

type UserAccountsPage =
    typeof import('./src/pages/web/care_control/user/UserAccountsPage');

type UserNavigationBar =
    typeof import('./src/pages/web/care_control/user/UserNavigationBar');
type UserClientsPage =
    typeof import('./src/pages/web/care_control/user/UserClientsPage');

type UserClientProfilePage =
    typeof import('./src/pages/web/care_control/user/UserClientProfilePage');

type UserStaffPage =
    typeof import('./src/pages/web/care_control/user/UserStaffPage');

type UserStaffProfilePage =
    typeof import('./src/pages/web/care_control/user/UserStaffProfilePage');

type UserNewUserPage =
    typeof import('./src/pages/web/care_control/user/UserNewUserPage');

type UserNewContactPage =
    typeof import('./src/pages/web/care_control/user/UserNewContactPage');

type UserEditClientPage =
    typeof import('./src/pages/web/care_control/user/UserEditClientPage');

type UserStaffEditProfilePage =
    typeof import('./src/pages/web/care_control/user/UserStaffEditProfilePage');

type CareControl2faPage =
    typeof import('./src/pages/web/care_control/CareControl2faPage.ts');

type CareControlForgotPasswordPage =
    typeof import('./src/pages/web/care_control/CareControlForgotPasswordPage');

type CareControlPasswordResetPage =
    typeof import('./src/pages/web/care_control/CareControlPasswordResetPage.ts');

type UserOutgoingCallPage =
    typeof import('./src/pages/web/care_control/user/UserOutgoingCallPage');

type UserNewClientPage =
    typeof import('./src/pages/web/care_control/user/UserNewClientPage');

type UserDashboardPage =
    typeof import('./src/pages/web/care_control/user/UserDashboardPage');

// Mobile Pages
type NucelusPermissionsPage =
    typeof import('./src/pages/mobile/nucleus/NucleusPermissionsPage');
type OvernightLoginPage =
    typeof import('./src/pages/mobile/overnight/OvernightLoginPage');
type OvernightHomePage =
    typeof import('./src/pages/mobile/overnight/OvernightHomePage');

type OvernightAndroidSettings =
    typeof import('./src/pages/mobile/overnight/OvernightAndroidSettings');

type OvernightPermissionsPage =
    typeof import('./src/pages/mobile/overnight/OvernightPermissionsPage');

// Endpoints:
type ControlAuth = typeof import('./src/pages/backend/api/auth/ControlAuth');
type AdminAuth = typeof import('./src/pages/backend/api/auth/AdminAuth');
type ScheduleAvailabilities =
    typeof import('./src/pages/backend/api/scheduleAvailabilities/ScheduleAvailabilities');
type DeviceUx = typeof import('./src/pages/backend/api/deviceUx/DeviceUx');

// Helpers
type ChaiWrapper = import('codeceptjs-chai');
type AppiumActions = import('./src/utils/helpers/AppiumActions');
type DriverHandler = import('./src/utils/helpers/DriverHandler');
type PlaywrightActions = import('./src/utils/helpers/PlaywrightActions');
type PlaywrightAllure = import('./src/utils/helpers/PlaywrightAllure');
type VisualValidations = import('./src/utils/helpers/VisualValidations');
type DbConnector = import('./src/utils/helpers/DbConnector');
type BddHooks = import('./src/utils/helpers/BddHooks');

declare namespace CodeceptJS {
    interface SupportObject {
        I: I;
        AdminLoginPage: AdminLoginPage;
        AdminDashboardPage: AdminDashboardPage;
        AdminNavigationBar: AdminNavigationBar;
        AdminAccountsPage: AdminAccountsPage;
        AdminNewUser: AdminNewUser;
        AdminEditUser: AdminEditUser;
        AdminClientProfilePage: AdminClientProfilePage;

        NucelusPermissionsPage: NucelusPermissionsPage;
        OvernightLoginPage: OvernightLoginPage;
        OvernightHomePage: OvernightHomePage;
        OvernightPermissionsPage: OvernightPermissionsPage;
        OvernightAndroidSettings: OvernightAndroidSettings;

        ControlAuth: ControlAuth;
        AdminAuth: AdminAuth;
        ScheduleAvailabilities: ScheduleAvailabilities;
        DeviceUx: DeviceUx;

        CareControlLoginPage: CareControlLoginPage;
        CareControlCompleteProfilePage: CareControlCompleteProfilePage;
        CareControlForgotPasswordPage: CareControlForgotPasswordPage;
        ProviderAccountsPage: ProviderAccountsPage;
        ProviderNavigationBar: ProviderNavigationBar;
        ProviderSchedulePage: ProviderSchedulePage;
        ProviderCallPage: ProviderCallPage;
        ProviderPostCallDataPage: ProviderPostCallDataPage;
        UserAccountsPage: UserAccountsPage;

        UserNavigationBar: UserNavigationBar;
        UserClientsPage: UserClientsPage;
        UserEditClientPage: UserEditClientPage;
        UserNewClientPage: UserNewClientPage;
        UserNewContactPage: UserNewContactPage;

        UserStaffPage: UserStaffPage;
        UserStaffProfilePage: UserStaffProfilePage;
        UserPicturesPage: UserPicturesPage;
        UserOutgoingCallPage: UserOutgoingCallPage;
        UserNewUserPage: UserNewUserPage;
        UserStaffEditProfilePage: UserStaffEditProfilePage;

        UserDashboardPage: UserDashboardPage;

        UserClientProfilePage: UserClientProfilePage;
        AdminAccountPage: AdminAccountPage;
        CareControl2faPage: CareControl2faPage;
        CareControlPasswordResetPage: CareControlPasswordResetPage;
        current: any;
    }
    interface Methods
        extends Playwright,
            Appium,
            ChaiWrapper,
            AppiumActions,
            DriverHandler,
            PlaywrightActions,
            PlaywrightAllure,
            VisualValidations,
            DbConnector,
            BddHooks {}
    interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
    namespace Translation {
        interface Actions {}
    }
}
