<script lang="ts">
    import { dataset_dev } from "svelte/internal";

	interface api_response{
    text : string
}


function fetchAPIData() {
    return fetch('http://numbersapi.com/random/math').then(r => r.text());
}

async function apiCall() {
    const result : api_response = { text: await fetchAPIData() };
    return result.text;
}
</script>

<!--About(start)-->
<table id="about" width="100%" cellpadding="0" cellspacing="0" bgcolor="black">
<tr>
	<td>
		<table cellpadding="15"
			cellspacing="0" width="80%" align="center">
			<tr>
				<td height="180" align="center"
					valign="middle" colspan="2">
					<p>
						About Me
					</p>
					<hr color="#4CAF50" width="90">
				</td>
			</tr>

			<tr>
				<td width="40%">
					<img src="/me.jpg" width="400" height="400" alt="Italian Trulli">
				</td>

				<td width="60%">
					<!-- <font face="Verdana" size="5" color=white style="color: white;"> -->
						<p>
						Thanks for your interest, here
						is a little about me and my work.</p>
						<!-- <hr color="black"> -->
						<p>I am a Machine Learning and Data Engineer.
						Currently I am a student at Innopolis univiersty,
						I love to solve programming problems
						in most efficient ways. Apart from
						being a student, I worked with
						Provectus as a Data Engineer, and at Innopolis univiersty's
						lab as a machine learning Engineer.</p>
						<!-- <hr color="black"> -->

						<p>I do my work mainly in Python,
						and JAVA. C++ and Data Structure
						& Algorithm were my stronger section while compiting in programing olympiad.
						Besides these I know Web Development,
						LINUX and database as well.</p>
						<!-- <hr color="black"> -->

						<p>This website is basically one of my
						Web Development project which is
						built using HTML and CSS only.
						Here one can also find ideas for
						projects in different languages.</p>

						<p>Thanks again for reading this,
						because of people like you, it
						exists and prospers!</p>
						<!-- <hr color="black"> -->
						<p>Cheers,</p>
						<br/>
						<b>To infinity and beyond.</b>
					<!-- </font> -->
				</td>
			</tr>
		</table>
		<hr color="black">
		<hr color="black">
		<hr color="black">
	</td>
</tr>
</table>
<!--About(end)-->

<!--About(start)-->
<table id="about" width="100%"
cellpadding="0" cellspacing="0" bgcolor="black">
<tr>
	<td>
		<table  cellpadding="15"
			cellspacing="0" width="80%" align="center">
			<tr>
				<td height="180" align="center"
					valign="middle" colspan="2">
					<font face="Verdana" size="7"
						color="#4CAF50">
						Here is a random number fact
					</font>
					<hr color="#4CAF50" width="90">
				</td>
			</tr>
			

				
			<tr>

				<td colspan="2">
					{#await apiCall()}
					<p>
						Loading ...
					</p>
					{:then data} 
					<p>
						{data}
					</p>	
					{/await}
					
				</td>
			</tr>
		</table>
		<hr color="black">
		<hr color="black">
		<hr color="black">
	</td>
</tr>
</table>
<!--About(end)-->

<style>
	p {
		color: white;
	}
</style>