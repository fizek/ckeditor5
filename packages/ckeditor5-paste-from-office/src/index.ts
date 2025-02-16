/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module paste-from-office
 */

export { default as PasteFromOffice } from './pastefromoffice.js';
export { Normalizer, type NormalizerData } from './normalizer.js';
export { default as MSWordNormalizer } from './normalizers/mswordnormalizer.js';
export { parseHtml } from './filters/parse.js';

import './augmentation.js';
