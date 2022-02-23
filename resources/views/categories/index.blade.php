@extends('layouts.layout')

@section('content')

@forelse ($categories as $category)
{{-- <a href= "{{route('categorias.show', $category->id)}}">{{$category->name}}</a>
<br><br> --}}
@if ($category->name === "Muebles")
 <a href="{{route('muebles')}}"></a>{{$category->name}}
@endif
@empty

@endforelse

@endsection
