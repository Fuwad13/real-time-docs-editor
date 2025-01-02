import { parseAsString , useQueryState } from "nuqs";
import { use } from "react";

export function useSearchParam(key: string)  {
    return useQueryState(key, parseAsString.withDefault("").withOptions({ clearOnDefault: true}));
};