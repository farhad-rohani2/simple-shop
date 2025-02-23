<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">
<head>
    {{Vite::useHotFile('builds/admin-panel-hot')
                    ->useBuildDirectory('/builds/admin-panel')
                    ->useManifestFilename('.vite/manifest.json')
                    ->withEntryPoints(['src/main.js'])}}

    {{Vite::useHotFile('builds/admin-panel-hot')
        ->useBuildDirectory('/builds/admin-panel')
        ->useManifestFilename('.vite/manifest.json')
        ->withEntryPoints(['tailwind.css'])}}
</head>
<body>

</body>

</html>
