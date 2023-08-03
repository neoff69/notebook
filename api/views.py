from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Note
from .serializers import MyModelSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status
from .models import Note
from django.http import JsonResponse


class AllNotes(APIView):
    def get(self, request):
        mymodel = Note.objects.all()
        serializer = MyModelSerializer(mymodel, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer =  MyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateNote(APIView):
    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        content = request.POST.get('content')

        response_data = {
            'title': title,
            'content': content
        }

        return JsonResponse(response_data)
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
      

