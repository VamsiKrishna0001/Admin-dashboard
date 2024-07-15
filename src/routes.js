
import SignIn from "./layouts/authentication/sign-in";
import Icon from "@mui/material/Icon";
import Dashboard from "./layouts/dashboard";
import InviteUsersTable from "./layouts/invite-users";
import MostInvitedUsers from "./layouts/most-invited-users";
import SmsLogs from "./layouts/sms-logs";
import Configuration from "./layouts/configuration";
import UsersTable from "./layouts/users";
import SmsIcon from '@mui/icons-material/Sms';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const routes = [
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/login",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">{<DashboardIcon/>}</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">{<PeopleAltIcon/>}</Icon>,
    route: "/users",
    component: <UsersTable />,
  },
  {
    type: "collapse",
    name: "Invite List Users",
    key: "invite_list_users",
    icon: <Icon fontSize="small">{<PersonAddAltIcon/>}</Icon>,
    route: "/invite-list-users",
    component: <InviteUsersTable />,
  },
  {
    type: "collapse",
    name: "Configurations",
    key: "configurations",
    icon: <Icon fontSize="small">{<ManageAccountsIcon/>}</Icon>,
    route: "/configurations",
    component: <Configuration />,
  },
  {
    type: "collapse",
    name: "Users SMS Logs",
    key: "users_sms_logs",
    icon: <Icon fontSize="small">{<SmsIcon/>}</Icon>,
    route: "/users-sms-logs",
    component: <SmsLogs />,
  },
  {
    type: "collapse",
    name: "Most Invited Users",
    key: "mosted_invited_users",
    icon: <Icon fontSize="small">{<GroupAddIcon/>}</Icon>,
    route: "/most-invited-users",
    component: <MostInvitedUsers />,
  },


];

export default routes;
