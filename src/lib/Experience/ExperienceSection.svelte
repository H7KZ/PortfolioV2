<script lang="ts">
    export let firm: string;
    export let icon: string;
    export let color: string;
    export let position: string;
    export let time: string;
    export let start_date: Date;
    export let end_date: Date;
    export let location: string;
    export let skills: string[];
</script>

<div>
    <img src={icon} alt={icon}>
    <div>
        <h3>{firm}</h3>
        <h4>{position}</h4>
        <h5>{time}</h5>
        <h5>{location}</h5>
        <ul>
            {#each skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
    </div>
</div>