/**
 * Modified by NewFlow Team
 * Original work: Copyright (c) 2019-2024, Jan Oberhauser (n8n)
 * Modified work: Copyright (c) 2024, NewFlow Team
 *
 * This file is part of NewFlow, a modified version of n8n.
 * License: Sustainable Use License (see LICENSE.md)
 */

export const LOCAL_STORAGE_PANEL_HEIGHT = 'NEWFLOW_CANVAS_CHAT_HEIGHT';

export const LOCAL_STORAGE_PANEL_WIDTH = 'NEWFLOW_CANVAS_CHAT_WIDTH';

export const LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH = 'NEWFLOW_LOGS_OVERVIEW_PANEL_WIDTH';

export const LOGS_PANEL_STATE = {
	CLOSED: 'closed',
	ATTACHED: 'attached',
	FLOATING: 'floating',
} as const;

export const LOG_DETAILS_PANEL_STATE = {
	INPUT: 'input',
	OUTPUT: 'output',
	BOTH: 'both',
} as const;
