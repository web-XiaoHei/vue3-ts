import { computed } from "vue";
import { mapGetters, useStore } from "vuex";

export function useGetters(mapper) {
    const store = useStore();
    // 获取到对应的对象的functions
    const storeGettersFns = mapGetters(mapper);

    // 对数据进行转换
    const storeGetters = {};
    Object.keys(storeGettersFns).forEach((fnKey) => {
        const fn = storeGettersFns[fnKey].bind({ $store: store });
        storeGetters[fnKey] = computed(fn);
    });

    return storeGetters
}