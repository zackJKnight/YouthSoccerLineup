﻿// <auto-generated />
using System;
using Lineup.Coach.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Lineup.Coach.Persistence.Migrations
{
    [DbContext(typeof(LineupCoachDbContext))]
    partial class LineupCoachDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("Lineup.Coach.Domain.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AvailablePlayerCount");

                    b.Property<int>("BenchCount");

                    b.Property<bool>("IsHomeGame");

                    b.Property<int>("MaxPlayersOnFieldCount");

                    b.Property<Guid?>("OpponentId");

                    b.Property<DateTime>("PlayDate");

                    b.Property<string>("RefereeName");

                    b.Property<double>("StartingPositionsPerPlayerCount");

                    b.HasKey("Id");

                    b.HasIndex("OpponentId");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Period", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("DurationInMinutes");

                    b.Property<Guid?>("GameId");

                    b.Property<int>("Number");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Period");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Player", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<int>("PlacementScore");

                    b.Property<Guid?>("PositionPreferenceRankId");

                    b.Property<Guid?>("TeamId");

                    b.HasKey("Id");

                    b.HasIndex("PositionPreferenceRankId");

                    b.HasIndex("TeamId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Position", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<Guid>("PeriodId");

                    b.Property<int>("PositionType");

                    b.Property<Guid?>("StartingPlayerId");

                    b.HasKey("Id");

                    b.HasIndex("PeriodId");

                    b.HasIndex("StartingPlayerId");

                    b.ToTable("Position");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.PositionPreferenceRank", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.HasKey("Id");

                    b.ToTable("PositionPreferenceRank");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Team", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Game", b =>
                {
                    b.HasOne("Lineup.Coach.Domain.Team", "Opponent")
                        .WithMany("Games")
                        .HasForeignKey("OpponentId");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Period", b =>
                {
                    b.HasOne("Lineup.Coach.Domain.Game")
                        .WithMany("Periods")
                        .HasForeignKey("GameId");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Player", b =>
                {
                    b.HasOne("Lineup.Coach.Domain.PositionPreferenceRank", "PositionPreferenceRank")
                        .WithMany()
                        .HasForeignKey("PositionPreferenceRankId");

                    b.HasOne("Lineup.Coach.Domain.Team")
                        .WithMany("Roster")
                        .HasForeignKey("TeamId");
                });

            modelBuilder.Entity("Lineup.Coach.Domain.Position", b =>
                {
                    b.HasOne("Lineup.Coach.Domain.Period")
                        .WithMany("Positions")
                        .HasForeignKey("PeriodId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Lineup.Coach.Domain.Player", "StartingPlayer")
                        .WithMany()
                        .HasForeignKey("StartingPlayerId");
                });
#pragma warning restore 612, 618
        }
    }
}
