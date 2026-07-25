<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Certification>
 */
class CertificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['CCNA', 'Microsoft Azure Certified', 'Power BI Certified', 'Google Digital Garage']),
            'issuing_organization' => fake()->randomElement(['Cisco', 'Microsoft', 'Google']),
            'issue_date' => fake()->date(),
            'credential_id' => fake()->uuid(),
            'credential_url' => fake()->url(),
            'badge_image' => 'certs/' . fake()->word() . '.png',
        ];
    }
}
