import { useMapper } from "./useMapper";
import { mapGetters } from "vuex";

export function useGetters(mapper) {


    return useMapper(mapper, mapGetters)
}