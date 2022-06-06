/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

export function lastArrayElement<T>(arr: T[]) : T | null {
    if (arr.length) {
        return arr[arr.length - 1];
    }

    return null;
}
