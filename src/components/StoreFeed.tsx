
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Package, MessageSquare, Clock, User, Send } from 'lucide-react';

const StoreFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'inventory',
      title: 'Nintendo Switch: SOLD OUT',
      message: 'Last unit sold 5 minutes ago. Restock ETA: Tomorrow 2 PM',
      author: 'System Alert',
      timestamp: '2 min ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'inventory',
      title: 'iPad – only 6 left',
      message: 'Low stock alert triggered. Consider promoting alternative tablets.',
      author: 'Inventory System',
      timestamp: '8 min ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'staff',
      title: 'Restock aisle 5',
      message: 'Cereal shelves are running low. Pallets available in back storage.',
      author: 'Sarah Chen',
      timestamp: '12 min ago',
      priority: 'normal'
    },
    {
      id: 4,
      type: 'maintenance',
      title: 'Spill near bakery',
      message: 'Customer spilled coffee near bakery entrance. Wet floor signs placed.',
      author: 'Mike Rodriguez',
      timestamp: '15 min ago',
      priority: 'normal'
    },
    {
      id: 5,
      type: 'maintenance',
      title: 'Freezer door stuck',
      message: 'Frozen foods section - door 3 handle mechanism jammed. Maintenance notified.',
      author: 'Emma Thompson',
      timestamp: '22 min ago',
      priority: 'medium'
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      type: 'staff',
      title: newPost.substring(0, 50),
      message: newPost,
      author: 'You',
      timestamp: 'Just now',
      priority: 'normal'
    };

    setPosts(prev => [post, ...prev]);
    setNewPost('');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'inventory': return <Package className="h-4 w-4 text-blue-500" />;
      case 'maintenance': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'staff': return <MessageSquare className="h-4 w-4 text-green-500" />;
      default: return <MessageSquare className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'normal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'inventory': return 'bg-blue-100 text-blue-800';
      case 'maintenance': return 'bg-orange-100 text-orange-800';
      case 'staff': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 animate-pulse" />
            <span className="text-lg sm:text-xl">Store Feed</span>
          </div>
          <Badge className="bg-white/20 text-white border-white/30 self-start sm:self-auto">Live Updates</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        {/* Quick Post Form */}
        <form onSubmit={handlePostSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              placeholder="Post a quick note (e.g., 'Spill in aisle 3', 'Restock needed'...)"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-1 border-2 border-blue-200 focus:border-blue-500 transition-colors"
            />
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <Send className="h-4 w-4 mr-2 sm:mr-0" />
              <span className="sm:hidden">Post</span>
            </Button>
          </div>
        </form>

        {/* Posts Feed */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(post.type)}
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">{post.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge className={getTypeColor(post.type)}>
                    {post.type}
                  </Badge>
                  <Badge className={getPriorityColor(post.priority)}>
                    {post.priority}
                  </Badge>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{post.message}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 space-y-1 sm:space-y-0">
                <span className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>{post.author}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.timestamp}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Summary */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-sm">
            <div className="bg-blue-50 p-2 sm:p-3 rounded-lg">
              <div className="font-semibold text-blue-600 text-lg sm:text-xl">
                {posts.filter(p => p.type === 'inventory').length}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">Inventory Alerts</div>
            </div>
            <div className="bg-orange-50 p-2 sm:p-3 rounded-lg">
              <div className="font-semibold text-orange-600 text-lg sm:text-xl">
                {posts.filter(p => p.type === 'maintenance').length}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">Maintenance Issues</div>
            </div>
            <div className="bg-green-50 p-2 sm:p-3 rounded-lg">
              <div className="font-semibold text-green-600 text-lg sm:text-xl">
                {posts.filter(p => p.type === 'staff').length}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">Staff Notes</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreFeed;
