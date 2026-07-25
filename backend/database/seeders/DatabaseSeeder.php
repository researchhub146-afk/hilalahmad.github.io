<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Premium Professional',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'bio' => 'Multi-disciplinary Engineer, Designer, and Digital Marketer with over 10 years of experience building enterprise-grade digital solutions.',
            'social_links' => [
                'twitter' => '#',
                'linkedin' => '#',
                'github' => '#',
                'dribbble' => '#'
            ]
        ]);

        \App\Models\Project::create([
            'title' => 'Nexus Cloud ERP',
            'description' => 'A comprehensive enterprise resource planning system with a focus on real-time data visualization and cloud scalability.',
            'category' => 'Development',
            'tech_stack' => ['Laravel 11', 'React 19', 'MySQL'],
            'image_path' => 'projects/project1.png',
            'order' => 1
        ]);

        \App\Models\Project::create([
            'title' => 'Aura Brand Identity',
            'description' => 'Sophisticated visual identity system for a sustainable lifestyle brand, including logo, typography, and brand guidelines.',
            'category' => 'Design',
            'tech_stack' => ['Adobe Illustrator', 'Figma'],
            'image_path' => 'projects/project2.png',
            'order' => 2
        ]);

        \App\Models\Project::create([
            'title' => 'Pulse Social App',
            'description' => 'A mobile-first social networking platform optimized for real-time engagement and premium community interactions.',
            'category' => 'UX/UI',
            'tech_stack' => ['React Native', 'Firebase'],
            'image_path' => 'projects/project3.png',
            'order' => 3
        ]);

        \App\Models\Certification::create([
            'name' => 'Azure Solutions Architect',
            'issuing_organization' => 'Microsoft',
            'issue_date' => '2023-01-01',
            'credential_id' => 'AZ-305',
            'credential_url' => '#'
        ]);

        \App\Models\Certification::create([
            'name' => 'Cisco Certified Network Associate',
            'issuing_organization' => 'Cisco',
            'issue_date' => '2022-06-15',
            'credential_id' => 'CCNA-200-301',
            'credential_url' => '#'
        ]);

        $platforms = ['LinkedIn', 'GitHub', 'Twitter', 'Personal Portfolio'];
        foreach ($platforms as $platform) {
            \App\Models\AnalyticsSnapshot::create([
                'platform' => $platform,
                'followers' => rand(500, 5000),
                'engagement_rate' => rand(2, 8),
                'date' => now()->subDays(rand(0, 30))->toDateString()
            ]);
        }

        \App\Models\ContactMessage::create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Hello, I love your work and would like to discuss a potential collaboration on an upcoming SaaS project.',
            'status' => 'unread'
        ]);
    }
}
