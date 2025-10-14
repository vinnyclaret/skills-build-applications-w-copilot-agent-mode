from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')

    def test_user_creation(self):
        user = get_user_model().objects.create_user(username='testuser', email='test@example.com', password='testpass')
        self.assertEqual(str(user), 'testuser')

    def test_activity_creation(self):
        team = Team.objects.create(name='Test Team')
        user = get_user_model().objects.create_user(username='testuser', email='test@example.com', password='testpass')
        activity = Activity.objects.create(user=user, type='run', duration=30)
        self.assertEqual(str(activity), 'testuser - run')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='desc')
        self.assertEqual(str(workout), 'Test Workout')

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Test Team')
        user = get_user_model().objects.create_user(username='testuser', email='test@example.com', password='testpass')
        leaderboard = Leaderboard.objects.create(user=user, score=100)
        self.assertEqual(str(leaderboard), 'testuser: 100')
