import { FilterCategory } from "../types/types";

export const CHARACTERS_CATEGORIES: FilterCategory []  = [
    {
        name: 'status',
        values: ['alive', 'dead', 'unknown'],
        current: null,
    },
    {
        name: 'gender',
        values: ['female', 'male', 'genderless', 'unknown'],
        current: null,
    }
]