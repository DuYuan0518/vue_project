import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import {
  Card,
  Button,
  Icon,
  Tab,
  Tabs,
  Toast,
  TreeSelect,
  Stepper,
  ActionBarButton,
  ActionBarIcon,
  ActionBar,
  Checkbox,
  CheckboxGroup,
  SubmitBar,
  ContactCard,
} from 'vant';
import router from './router/index';
import './common/css/base.less';
import store from './store';

const app = createApp(App);

app
  .use(Button)
  .use(Card)
  .use(Icon)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Checkbox)
  .use(SubmitBar)
  .use(ContactCard)
  .use(CheckboxGroup);

app.use(router);
app.use(store);
app.mount('#app');
