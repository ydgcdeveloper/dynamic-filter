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

export const TOKEN_KEY = 'accessToken';
export const REFRESH_TOKEN_KEY = 'refreshToken';
export const USER_KEY = 'user';
