
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Trophy, Target, TrendingUp, Award } from 'lucide-react';

const EmployeeEngagementPlatform = () => {
  const challenges = [
    {
      title: 'Energy Conservation Week',
      description: 'Reduce energy usage by 15% store-wide',
      progress: 67,
      participants: 142,
      deadline: '3 days left',
      reward: '500 Green Points',
      status: 'active'
    },
    {
      title: 'Zero Waste Lunch Challenge',
      description: 'Pack waste-free lunches for a week',
      progress: 89,
      participants: 78,
      deadline: 'Completed',
      reward: '300 Green Points',
      status: 'completed'
    },
    {
      title: 'Sustainable Commute Month',
      description: 'Use eco-friendly transportation',
      progress: 45,
      participants: 156,
      deadline: '2 weeks left',
      reward: '750 Green Points',
      status: 'active'
    }
  ];

  const leaderboard = [
    { name: 'Sarah M.', department: 'Grocery', points: 2450, rank: 1, badge: 'Eco Champion' },
    { name: 'Mike R.', department: 'Electronics', points: 2280, rank: 2, badge: 'Green Leader' },
    { name: 'Lisa K.', department: 'Apparel', points: 2100, rank: 3, badge: 'Sustainability Star' },
    { name: 'David L.', department: 'Pharmacy', points: 1950, rank: 4, badge: 'Eco Warrior' },
    { name: 'Emma T.', department: 'Deli', points: 1820, rank: 5, badge: 'Green Advocate' }
  ];

  const achievements = [
    { title: 'Energy Saver', description: 'Reduced energy usage by 20%', unlocked: true },
    { title: 'Waste Warrior', description: 'Zero waste for 30 days', unlocked: true },
    { title: 'Carpool Champion', description: 'Organized 10 carpool groups', unlocked: false },
    { title: 'Recycling Hero', description: 'Properly sorted 1000 items', unlocked: true }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Employee Engagement Platform</h3>
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">89% Participation Rate</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <h4 className="font-medium text-gray-900 mb-4">Active Challenges</h4>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900">{challenge.title}</h5>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                  <Badge className={
                    challenge.status === 'active' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }>
                    {challenge.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{challenge.progress}%</div>
                    <div className="text-xs text-gray-500">Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{challenge.participants}</div>
                    <div className="text-xs text-gray-500">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{challenge.reward}</div>
                    <div className="text-xs text-gray-500">Reward</div>
                  </div>
                </div>
                
                <Progress value={challenge.progress} className="mb-2" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">{challenge.deadline}</span>
                  {challenge.status === 'active' && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Join Challenge
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Leaderboard</h4>
          <div className="space-y-2 mb-6">
            {leaderboard.map((user, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-pulse text-white rounded-full text-sm font-bold mr-3">
                  {user.rank}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-600">{user.department}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">{user.points}</div>
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                    {user.badge}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <h4 className="font-medium text-gray-900 mb-4">Achievements</h4>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-3 rounded-lg border ${
                achievement.unlocked 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <Award className={`h-4 w-4 ${
                    achievement.unlocked ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <div className="flex-1">
                    <div className={`text-sm font-medium ${
                      achievement.unlocked ? 'text-green-900' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </div>
                    <div className={`text-xs ${
                      achievement.unlocked ? 'text-green-700' : 'text-gray-400'
                    }`}>
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-green-900">Total Green Points Earned</div>
            <div className="text-2xl font-bold text-green-600">24,750 Points</div>
            <div className="text-xs text-green-700">Team sustainability impact growing daily</div>
          </div>
          <Trophy className="h-8 w-8 text-green-600" />
        </div>
      </div>
    </Card>
  );
};

export default EmployeeEngagementPlatform;
