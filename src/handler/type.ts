/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { QuoteType } from '../constants';
import { FormatFn, HTMLFn } from '../type';

export type Handler = {
    /**
     * All matching tags will be passed to the format function or string to be converted into BBCode.
     *
     * default: undefined
     */
    tags?: Record<string, any>,
    /**
     * All matching tags will be passed to the format function or string to be converted into BBCode.
     *
     * default: undefined
     */
    styles?: Record<string, string[]>,
    /**
     * Should be either a string in the format "[b]{0}[/b]" where {0} will be replaced with the BBCode tags content.
     */
    format?: string | FormatFn,
    /**
     * Should be either a string in the format "<strong>{0}</strong>" where {0} will be replaced with the HTML tags content.
     */
    html: string | HTMLFn,
    /**
     * The attribute quote type.
     *
     * default: QuoteType.auto
     */
    quoteType?: `${QuoteType}`,

    /**
     * If this BBCode is a self closing tag (has no closing tag i.e. [hr]).
     *
     * default: false
     */
    isSelfClosing?: boolean,

    /**
     * If this BBCode is an inline or block level BBCode.
     *
     * default: true
     */
    isInline?: boolean,

    /**
     * If this output HTML for this BBCode is inline or not.
     * Only needs to be set if it differs from the BBCodes isInline value.
     * If undefined this is ignored and isInline is used.
     *
     * default: undefined
     */
    isHtmlInline?: boolean,

    /**
     * If null/undefined then all children will be allowed.
     * If it’s an array only the tags specified will be allowed. To allow plain text use # as the tag name.
     *
     * default: undefined
     */
    allowedChildren?: string[],

    /**
     * If this tag is allowed to be empty (have no children or content).
     *
     * default: false
     */
    allowsEmpty?: boolean,

    /**
     * If to not add a closing tag. Mostly so that [*] can be used without [/*]
     *
     * default: false
     */
    excludeClosing?: boolean,

    /**
     * Block level tags have an extra <br /> added to the end of them in all browsers except IE.
     *
     * default: false
     */
    skipLastLineBreak?: boolean,

    /**
     * Whether to use strict matching on attributes and styles.
     *
     * default: false
     */
    strictMatch?: boolean,

    /**
     * If to insert a new line before the start tag.
     *
     * default: false
     */
    breakBefore?: boolean,

    /**
     * If to insert a new line after the start tag.
     *
     * default: false
     */
    breakStart?: boolean,

    /**
     * If to insert a new line before the end tag.
     *
     * default: false
     */
    breakEnd?: boolean,

    /**
     * If to insert a new line after the end tag.
     *
     * default: false
     */
    breakAfter?: boolean,

    /**
     * default: undefined
     */
    closedBy?: string[]
};
