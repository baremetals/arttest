import BaseInput from '@/components/GlobalFiles/Inputs/BaseInput.vue';
import BaseDropdown from '@/components/GlobalFiles/BaseDropdown.vue';
import Card from '@/components/Cards/Card.vue';
import Modal from '@/components/Modal.vue';
import StatsCard from '@/components/Cards/StatsCard.vue';
import BaseButton from '@/components/GlobalFiles/BaseButton.vue';
import Badge from '@/components/GlobalFiles/Badge.vue';
import BaseRadio from "@/components/GlobalFiles/Inputs/BaseRadio";
import BaseProgress from "@/components/GlobalFiles/BaseProgress";
import BasePagination from "@/components/GlobalFiles/BasePagination";
import BaseAlert from "@/components/GlobalFiles/BaseAlert";
import BaseNav from "@/components/Navbar/BaseNav";
import BaseHeader from '@/components/GlobalFiles/BaseHeader';

import { Input, Tooltip, Popover } from 'element-ui';
import vue2Dropzone from 'vue2-dropzone';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(Card.name, Card);
    Vue.component(Modal.name, Modal);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Input.name, Input);
    Vue.use(Tooltip);
    Vue.use(Popover);
    Vue.component(vue2Dropzone);
  }
};

export default GlobalComponents;
