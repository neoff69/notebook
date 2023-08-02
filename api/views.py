from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Note
from .serializers import MyModelSerializer
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status
from .models import Note


class AllNotes(APIView):
    def get(self, request):
        mymodel = Note.objects.all()
        serializer = MyModelSerializer(mymodel, many=True)
        return Response(serializer.data)

class SingleNote(APIView):
    def get_object(self, request, id):
        try:
            return Note.objects.get(id=id)
        except Note.DoesNotExist:
            raise NotFound()


    def get(self, request, id):
        note = self.get_object(request=request, id=id)
        serializer = MyModelSerializer(note)
        return Response(serializer.data)
    
    def delete(self, request, id):
        try:
            note = self.get_object(request=request, id=id)
        except Note.DoesNotExist:
            raise NotFound()

        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

