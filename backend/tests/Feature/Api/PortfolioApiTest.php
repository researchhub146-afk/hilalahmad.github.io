<?php

namespace Tests\Feature\Api;

use App\Models\User;
use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_can_fetch_portfolio_data()
    {
        User::factory()->create();
        Project::factory()->count(3)->create();

        $response = $this->getJson('/api/portfolio-data');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'user',
                'projects',
                'certifications',
                'analytics'
            ]);
    }

    public function test_public_can_submit_contact_form()
    {
        $data = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'subject' => 'Inquiry',
            'message' => 'Hello, I am interested in your services.',
        ];

        $response = $this->postJson('/api/contact', $data);

        $response->assertStatus(201)
            ->assertJson(['message' => 'Message sent successfully!']);

        $this->assertDatabaseHas('contact_messages', ['email' => 'john@example.com']);
    }

    public function test_contact_form_requires_validation()
    {
        $response = $this->postJson('/api/contact', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'subject', 'message']);
    }
}
