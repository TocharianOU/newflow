const fs = require('fs');
const path = require('path');

/**
 * Copy shared icons to versioned subdirectories in both src and dist
 * This ensures version-specific nodes (v1, v2, V3, etc.) can access parent icons
 */
function copyVersionedIcons(baseDir) {
	const iconMappings = [
		// ItemLists V3 needs parent icon
		{
			source: 'nodes/ItemLists/itemLists.svg',
			targets: [
				'nodes/ItemLists/V3/itemLists.svg',
				'dist/nodes/ItemLists/V3/itemLists.svg',
			],
		},
		// RemoveDuplicates v2 needs parent icon
		{
			source: 'nodes/Transform/RemoveDuplicates/removeDuplicates.svg',
			targets: [
				'nodes/Transform/RemoveDuplicates/v2/removeDuplicates.svg',
				'dist/nodes/Transform/RemoveDuplicates/v2/removeDuplicates.svg',
			],
		},
		// Postgres v2 needs parent icon
		{
			source: 'nodes/Postgres/postgres.svg',
			targets: [
				'nodes/Postgres/v2/postgres.svg',
				'dist/nodes/Postgres/v2/postgres.svg',
			],
		},
		// Add more mappings here if needed for other versioned nodes
	];

	for (const mapping of iconMappings) {
		const sourcePath = path.resolve(baseDir, mapping.source);
		
		// Check if source exists
		if (!fs.existsSync(sourcePath)) {
			console.warn(`Warning: Source icon not found: ${mapping.source}`);
			continue;
		}

		for (const target of mapping.targets) {
			const targetPath = path.resolve(baseDir, target);
			const targetDir = path.dirname(targetPath);

			// Create target directory if it doesn't exist
			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, { recursive: true });
			}

			// Copy the file
			try {
				fs.copyFileSync(sourcePath, targetPath);
				console.log(`Copied: ${mapping.source} -> ${target}`);
			} catch (error) {
				console.warn(`Warning: Failed to copy ${mapping.source} to ${target}:`, error.message);
			}
		}
	}
}

// Run if called directly
if (require.main === module) {
	copyVersionedIcons(process.argv[2] || '.');
	console.log('Versioned icons copy completed');
}

module.exports = { copyVersionedIcons };

