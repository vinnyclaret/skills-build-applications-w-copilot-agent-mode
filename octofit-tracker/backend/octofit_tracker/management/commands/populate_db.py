from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models
from octofit_tracker import models as octo_models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        get_user_model().objects.all().delete()
        octo_models.Team.objects.all().delete()
        octo_models.Activity.objects.all().delete()
        octo_models.Leaderboard.objects.all().delete()
        octo_models.Workout.objects.all().delete()

        # Create teams
        marvel = octo_models.Team.objects.create(name='Marvel')
        dc = octo_models.Team.objects.create(name='DC')

        # Create users
        ironman = get_user_model().objects.create_user(username='ironman', email='ironman@marvel.com', password='password', team=marvel)
        batman = get_user_model().objects.create_user(username='batman', email='batman@dc.com', password='password', team=dc)

        # Create activities
        octo_models.Activity.objects.create(user=ironman, type='run', duration=30)
        octo_models.Activity.objects.create(user=batman, type='cycle', duration=45)

        # Create workouts
        octo_models.Workout.objects.create(name='Super Strength', description='Strength workout for heroes')
        octo_models.Workout.objects.create(name='Speed Run', description='Speed workout for heroes')

        # Create leaderboard
        octo_models.Leaderboard.objects.create(user=ironman, score=100)
        octo_models.Leaderboard.objects.create(user=batman, score=90)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
