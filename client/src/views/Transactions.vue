<template>
<div class="wrapper bg-dark">
  <div class=" container aa">
    <div class="border shadow-lg rounded table-responsive body">
      <table class="table table-striped custom-table">
        <thead>
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Contact</th>
            <th scope="col">Education</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
            <td>1392</td>
            <td><a href="#">James Yates</a></td>
            <td>
              Web Designer
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+63 983 0962 971</td>
            <td>NY University</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>

          <tr>
            <td>4616</td>
            <td><a href="#">Matthew Wasil</a></td>
            <td>
              Graphic Designer
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+02 020 3994 929</td>
            <td>London College</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>
          <tr>
            <td>9841</td>
            <td><a href="#">Sampson Murphy</a></td>
            <td>
              Mobile Dev
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+01 352 1125 0192</td>
            <td>Senior High</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>
          <tr>
            <td>9548</td>
            <td><a href="#">Gaspar Semenov</a></td>
            <td>
              Illustrator
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+92 020 3994 929</td>
            <td>College</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>

          <tr>
            <td>4616</td>
            <td><a href="#">Matthew Wasil</a></td>
            <td>
              Graphic Designer
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+02 020 3994 929</td>
            <td>London College</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>
          <tr>
            <td>9841</td>
            <td><a href="#">Sampson Murphy</a></td>
            <td>
              Mobile Dev
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+01 352 1125 0192</td>
            <td>Senior High</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>
          <tr>
            <td>9548</td>
            <td><a href="#">Gaspar Semenov</a></td>
            <td>
              Illustrator
              <small class="d-block"
                >Far far away, behind the word mountains</small
              >
            </td>
            <td>+92 020 3994 929</td>
            <td>College</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</template>

<style scoped>
.body {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #3c373e;
  font-weight: 300;
}

p {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}

.content {
  padding: 7rem 0;
}

h2 {
  font-size: 20px;
  color: #fff;
}

.custom-table {
  min-width: 900px;
}
.custom-table thead tr,
.custom-table thead th {
  padding-bottom: 30px;
  border-top: none;
  border-bottom: none !important;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
.custom-table tbody th,
.custom-table tbody td {
  color: #777;
  font-weight: 400;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
  border: none;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.custom-table tbody th small,
.custom-table tbody td small {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
}
.custom-table tbody th a,
.custom-table tbody td a {
  color: rgba(255, 255, 255, 0.3);
}
.custom-table tbody th .more,
.custom-table tbody td .more {
  color: rgba(255, 255, 255, 0.3);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
.custom-table tbody tr {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.custom-table tbody tr:hover td,
.custom-table tbody tr:focus td {
  color: #fff;
}
.custom-table tbody tr:hover td a,
.custom-table tbody tr:focus td a {
  color: #fdd114;
}
.custom-table tbody tr:hover td .more,
.custom-table tbody tr:focus td .more {
  color: #fdd114;
}
.custom-table .td-box-wrap {
  padding: 0;
}
.custom-table .box {
  background: #fff;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.custom-table .box td,
.custom-table .box th {
  border: none !important;
}
.aa {
  padding-top:10rem;
  padding-bottom:10rem;
}
</style>