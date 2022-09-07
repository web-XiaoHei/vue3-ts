import { useMapper } from "./useMapper";
import { mapState } from "vuex";

export function useGetters(mapper) {
    return useMapper(mapper, mapState)
}