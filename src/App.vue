<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search..." />
    </header>

    <div class="options-container">
      <div class="card">
        <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/5357/s960_Maths_English_blackboard_960x640.jpg" alt="" />
        <h2>Math</h2>
        <p>15 questions</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* CARD */
  .card {
    width: 310px;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-right: 20px;
    margin-bottom: 35px;
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0;
  }

  .card .card-text {
    padding: 0 10px; 
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>