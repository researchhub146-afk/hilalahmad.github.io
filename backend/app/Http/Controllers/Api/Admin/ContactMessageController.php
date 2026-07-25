<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \App\Models\ContactMessage::latest()->get();
    }

    public function show(\App\Models\ContactMessage $message)
    {
        return $message;
    }

    public function update(Request $request, \App\Models\ContactMessage $message)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:unread,read,replied',
        ]);

        $message->update($validated);
        return response()->json($message);
    }

    public function destroy(\App\Models\ContactMessage $message)
    {
        $message->delete();
        return response()->json(null, 204);
    }
}
