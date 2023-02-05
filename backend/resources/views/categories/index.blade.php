@extends('./layout.master')


@section('content')

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <a class="btn btn-primary ml-1 mb-3" href="/admin/categories/create">Add category</a>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">List of categories</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="dataTable_filter" class="dataTables_filter"></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                                    <thead>
                                        <tr role="row"><th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 50px;">Category Name</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 50px;">Category Image</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 50px;">Action</th></tr>
                                    </thead>
                                    <tfoot>
                                        <tr><th rowspan="1" colspan="1">Category Name</th><th rowspan="1" colspan="1">Category Image</th><th rowspan="1" colspan="1">Action</th></tr>
                                    </tfoot>
                                    <tbody>
                                        @foreach ($categories as $category)
                                        <tr class="odd">
                                            <td class="sorting_1">{{ $category->name }}</td>
                                            <td>
                                                <img style="height: 50px; width:50px" 
                                                src="{{ asset('./categories/'. $category->image)  }}"
                                                class="img-fluid rounded-circle" alt="">
                                            </td>
                                            <td>
                                                <a class="btn btn-primary" href="/admin/categories/{{ $category->id }}/edit">Edit</a>
                                                <form action="/admin/categories/{{ $category->id }}" method="post" style="display: inline-block" onsubmit="return confirm('Are you sure you want to delete the category?');">
                                                    @csrf
                                                    @method('DELETE')
                                                    <input type="hidden" value="{{ $category->id }}" name="category_id">
                                                    <input type="submit" 
                                                    name="submit" 
                                                    value="Delete" 
                                                    class="btn btn-danger"
                                                    >
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach       
                                    </tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul class="pagination">{{ $categories->links() }}</ul></div></div></div></div>
                            </div>
                        </div>
                    </div>


                </div>
                <!-- /.container-fluid -->


    
@endsection