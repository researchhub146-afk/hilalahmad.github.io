<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CertificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \App\Models\Certification::orderBy('issue_date', 'desc')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'issuing_organization' => 'required|string|max:255',
            'issue_date' => 'required|date',
            'credential_id' => 'nullable|string|max:255',
            'credential_url' => 'nullable|url',
            'badge_image' => 'nullable|string',
        ]);

        $certification = \App\Models\Certification::create($validated);
        return response()->json($certification, 201);
    }

    public function show(\App\Models\Certification $certification)
    {
        return $certification;
    }

    public function update(Request $request, \App\Models\Certification $certification)
    {
        $validated = $request->validate([
            'name' => 'string|max:255',
            'issuing_organization' => 'string|max:255',
            'issue_date' => 'date',
            'credential_id' => 'nullable|string|max:255',
            'credential_url' => 'nullable|url',
            'badge_image' => 'nullable|string',
        ]);

        $certification->update($validated);
        return response()->json($certification);
    }

    public function destroy(\App\Models\Certification $certification)
    {
        $certification->delete();
        return response()->json(null, 204);
    }
}
